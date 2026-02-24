import FileManager from "./FileManager.js";
import child_process from "child_process";
import Param from "../models/param.model.js";

// Executes all tests
export async function execute_tests(code, tests, is_function, element_name) {
	const promises = [];
	for (const test of tests) {
		let params = [];

		if (is_function) {
			const result = await Param.get_params(test["id_test"]);
			params = result[0];
		}

		const test_promise = execute_test(code, test, is_function, element_name, clean_params(params));
		promises.push(test_promise);
	}

	return Promise.all(promises);
}

// Executes one test
function execute_test(code, test, is_function, element_name, params) {
	const path = `./src/tmp/${test["id_test"]}.js`;
	const formatted_code = format_code(code, element_name, is_function, params);

	// Creates a temporary file to write the code in
	FileManager.write(path, formatted_code);

	const test_message = is_function
		? `Test - ${element_name}(${params.join(", ")})`
		: `Test variable "${element_name}"`;

	const test_result = {
		test: test_message,
		result_message: "",
		logs: [],
		passed: false,
	};

	// Start subprocess
	const p = child_process.fork(path, { stdio: "pipe" });

	// Get stdout and stderr from subprocess
	p.stdout.on("data", (data) => test_result["logs"].push(`${data.toString().trim()}`));
	p.stderr.on("data", (data) => test_result["logs"].push(`${data.toString().trim()}`));

	// Get result from execution
	p.on("message", (msg) => {
		const { message, passed } = process_results(
			msg["value"],
			msg["type"],
			test["expected_result"],
			test["result_type"],
		);

		test_result["result_message"] = message;
		test_result["passed"] = passed;
	});

	// Resolve promise when subprocess exits then delete tmp file
	const promise = new Promise((resolve, reject) => {
		p.on("exit", (code, signal) => {
			resolve(test_result);
			FileManager.delete(path);
		});
	});

	return promise;
}

// Returns a list of params cleaned
function clean_params(params) {
	const cleaned = [];
	for (const p of params) {
		let new_param = p["content"];

		if (p["type"] == "number") new_param = parseInt(p["content"]);
		if (p["type"] == "boolean") new_param = boolean(parseInt(p["content"]));

		cleaned.push(new_param);
	}
	return cleaned;
}

// Prepare code to be written
function format_code(base_code, element_name, is_function, params = []) {
	const test_call = is_function ? `${element_name}(${params.join(", ")})` : `${element_name}`;
	const new_code = `try {
    ${base_code.trim()}
    const _result_ = ${test_call};
	process.send({value: _result_, type: typeof _result_});
} catch (e) {
	const error = e.name + " : " + e.message;
	console.error(error);
}`;
	return new_code;
}

// Process the test execution results
function process_results(value, type, expected_value, expected_type) {
	const good_value = value == expected_value;
	const good_type = type == expected_type;
	let message;

	if (!good_type) {
		message = `Expected value must be a ${expected_type} - Received a ${type}`;
	} else if (!good_value) {
		message = `Expected value of ${expected_value} - Received : ${value}`;
	} else {
		message = `Received : ${value} - Test passed !`;
	}

	return { message: message, passed: good_type && good_value };
}
