import Course from "../models/Course.js";

export function get_course(req, res) {
	const id_course = req.params.id;

	Course.get_one(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(200).json(results);
	});
}

export function get_courses(req, res) {
	Course.get_all((err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(200).json(results);
	});
}

export function get_course_taken(req, res) {
	const id_course = req.query.id_course;
	const id_user = req.query.id_user;
	Course.get_course_taken(id_course, id_user, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(200).json(results);
	});
}

export function get_dependencies(req, res) {
	const id_course = req.params.id;

	Course.get_dependencies(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(200).json(results);
	});
}
