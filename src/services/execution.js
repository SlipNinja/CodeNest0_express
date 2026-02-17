import FileManager from "./FileManager.js";
import child_process from "child_process";

export function execute_variable_test(code, test, element_name) {
	const path = `./src/tmp/${test["id_test"]}.js`;
	const formatted_code = `try {
    ${code.trim()}
	process.send({name:${element_name}, type: typeof ${element_name}});
} catch (e) {
	const error = e.name + " : " + e.message;
	console.error(error);
}`;

	FileManager.write(path, formatted_code);

	const test_result = {
		test: "",
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
		const value = msg["name"] == test["expected_result"];
		const type = msg["type"] == test["result_type"];

		if (!type) {
			test_result["test"] = `Expected ${test["result_type"]} - Received ${msg["type"]}`;
		} else {
			test_result["test"] = `Expected ${test["expected_result"]} - Received ${msg["name"]}`;
		}
		test_result["passed"] = value && type;
	});

	const promise = new Promise((resolve, reject) => {
		p.on("exit", (code, signal) => {
			resolve(test_result);
			FileManager.delete(path);
		});
	});

	return promise;
}
