import Step from "../models/Step.js";

export function get_steps(req, res) {
	const id_course = req.body.id_course;
	Step.get_steps(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		res.json(results);
	});
}
