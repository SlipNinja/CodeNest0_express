import User from "../models/User.js";
import { create_token } from "../services/authentification.js";
import bcrypt from "bcrypt";

export function get_users(req, res) {
	User.get_all((err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.json(results);
	});
}

export function delete_user(req, res) {
	User.delete_user(req.params.id, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(204).json(results);
	});
}

export async function create_user(req, res) {
	const { email, password, username } = req.body;

	// Encrypt password
	const rounds = parseInt(process.env.BCRYPT_ROUNDS);
	const password_hash = await bcrypt.hash(password, rounds);

	User.create_user(username, email, password_hash, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(201).json(results);
	});
}

export function login(req, res) {
	const { email, password } = req.body;

	// Query user by credentials
	User.login(email, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		const user = results[0];
		if (!user) return res.status(404).json({ message: "User not found." });

		const password_hash = user["password"];
		const valid = bcrypt.compare(password, password_hash);

		if (!valid) return res.status(401).json({ message: "Wrong credentials." });

		const token = create_token(user);
		res.status(200).json({ message: token });
	});
}
