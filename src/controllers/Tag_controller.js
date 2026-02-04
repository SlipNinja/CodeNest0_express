import Tag from "../models/Tag.js";

export async function get_tags_by_course(req, res) {
	const id_course = req.params.id;

	const results = await Tag.get_by_course(id_course);
	res.status(200).json(results[0]);
}
