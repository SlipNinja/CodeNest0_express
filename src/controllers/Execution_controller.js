import Test from "../models/Test.js";
import { execute_tests } from "../services/execution.js";

export async function execute_code(req, res) {
	const { step, lang, code } = req.body;

	const query_results = await Test.get_tests(step["id_step"]);
	const tests = query_results[0];
	const is_func = step["element_is_function"];
	const element_name = step["element_name"];

	const result = await execute_tests(code, tests, is_func, element_name);
	return res.status(200).json(result);
}
