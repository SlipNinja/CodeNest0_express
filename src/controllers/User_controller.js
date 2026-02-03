import User from "../models/User.js";

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
