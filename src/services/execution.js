import Test from "../models/Test.js";
import FileManager from "./FileManager.js";
import child_process from "child_process";

//import child_process

// interface TestResponse {
// 	test: string;
// 	logs: string[];
// 	passed: boolean;
// }

// export interface ExecutionResponse {
// 	test_responses?: TestResponse[];
// 	all_passed: boolean;
// }

export async function execute_code(req, res) {
	const { step, lang, code } = req.body;

	//console.log("STEP " + Object.entries(step));
	//console.log("LANG " + lang);
	//console.log("CODE " + code);

	const results = await Test.get_tests(step["id_step"]);
	const tests = results[0];
	const is_func = step["element_is_function"];

	if (is_func) {
		// Get params etc
	} else {
		// Only one test for variables
		const result = await execute_variable_test(code, tests[0]);
		console.log(result);
	}

	res.json(results);
}

function execute_variable_test(code, test) {
	const path = `./src/tmp/${test["id_test"]}.js`;

	//FileManager.write(path, code);

	const test_result = {
		test: `Expected ${test["expected_result"]}`,
		logs: [],
		passed: false,
	};

	// Start subprocess
	const p = child_process.fork(path, { stdio: "pipe" });

	p.stdout.on("data", (data) => {
		test_result["logs"].push(`${data.toString().trim()}`);
	});

	p.stderr.on("data", (data) => {
		test_result["logs"].push(`${data.toString().trim()}`);
	});

	p.on("message", (msg) => {
		// if (test["result_type"] == number) {
		// 	msg = parseInt(msg);
		// }

		test_result["passed"] = msg == test["expected_result"];
	});

	const promise = new Promise((resolve, reject) => {
		p.on("exit", (code, signal) => {
			resolve(test_result);
		});
	});

	return promise;

	//FileManager.delete(path);

	// Format code
	// Create tmp file ( with id ? ) to write code to
	// Fork
	// Wait for results
	// Remove tmp file
	// Return results
}
