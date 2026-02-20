import User from "../models/User.js";
import { create_token } from "../services/authentification.js";
import bcrypt from "bcrypt";

export async function get_users(req, res) {
	const results = await User.get_all();
	res.status(200).json(results[0]);
}

export async function delete_user(req, res) {
	const results = await User.delete_user(req.params.id);
	res.status(204).json(results[0]);
}

export async function get_total_xp(req, res) {
	const id_user = req.params.id;
	const results = await User.total_xp(id_user);
	res.status(200).json(results[0][0]);
}

export async function update_user(req, res) {
	const { email, username } = req.body;
	await User.update_user(req.params.id, username, email);
	const results = await User.get_one(req.params.id);
	const token = create_token(results[0][0]);
	res.status(201).json(token);
}

export async function create_user(req, res) {
	const { email, password, username } = req.body;

	// Encrypt password
	const rounds = parseInt(process.env.BCRYPT_ROUNDS);
	const password_hash = await bcrypt.hash(password, rounds);

	const results = await User.create_user(username, email, password_hash);
	res.status(201).json(results[0]);
}

export async function login(req, res) {
	const { email, password } = req.body;

	// Query user by credentials
	const results = await User.login(email);
	const user = results[0][0];
	if (!user) return res.status(404).json({ message: "User not found." });

	const password_hash = user["password"];
	const valid = bcrypt.compare(password, password_hash);
	if (!valid) return res.status(401).json({ message: "Wrong credentials." });

	const token = create_token(user);
	res.status(200).json({ message: token });
}
