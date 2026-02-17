import Test from "../models/Test.js";
import { execute_variable_test } from "../services/execution.js";

export async function execute_code(req, res) {
	const { step, lang, code } = req.body;

	const query_results = await Test.get_tests(step["id_step"]);
	const tests = query_results[0];
	const is_func = step["element_is_function"];
	const results = [];

	if (is_func) {
		// Get params etc
		return res.status(200).json(results);
	} else {
		// Only one test for variables
		const result = await execute_variable_test(code, tests[0], step["element_name"]);
		results.push(result);
		console.log(result);
		return res.status(200).json(results);
	}
}
