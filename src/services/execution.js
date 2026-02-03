import Test from "../models/Test.js";

export function execute_code(req, res) {
	const code = req.body.code;
	const step = req.body.step;

	Test.get_tests(step, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		// Do execute here
		console.log(results);

		res.json(results);
	});
}
