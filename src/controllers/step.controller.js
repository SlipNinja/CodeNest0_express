import Step from "../models/step.model.js";

export function get_steps(req, res) {
	const id_course = req.body.id_course;
	const results = Step.get_steps(id_course);

	res.json(results[0]);
}
