import Tag from "../models/Tag.js";

export function get_tags_by_course(req, res) {
	const id_course = req.params.id;

	Tag.get_by_course(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(200).json(results);
	});
}
