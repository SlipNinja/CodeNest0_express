import { User, Course, Test, Step, Tag } from "./model.js";

// Course
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

// Tag
export function get_tags_by_course(req, res) {
	const id_course = req.params.id;

	Tag.get_by_course(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(200).json(results);
	});
}

// User
export function get_users(req, res) {
	User.get_all((err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.json(results);
	});
}

export function create_user(req, res) {
	const email = req.body.email;
	const password = req.body.password;
	const username = req.body.username;

	User.create_user(username, email, password, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(201).json(results);
	});
}

// Steps
export function get_steps(req, res) {
	const id_course = req.body.id_course;
	Step.get_steps(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		res.json(results);
	});
}

// Execute
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
