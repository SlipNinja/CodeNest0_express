import User from "../models/User.js";
import { create_token } from "../services/authentification.js";

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

export function login(req, res) {
	const { email, password } = req.body;

	// Query user by credentials
	User.login(email, password, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		const user = results[0];

		// If user found in database
		if (user) {
			const token = create_token(user);
			res.status(200).json({ message: token });
		} else {
			res.status(401).json({ message: "Email or password incorrect" });
		}
	});
}
