import { User, Test, Step } from "./model.js";
import jwt from "jsonwebtoken";

function login(req, res) {
	const { email, password } = req.body;

	User.login(email, password, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		const user = results[0];

		if (user) {
			// Dont send password in token
			delete user["password"];

			// Encoding token
			const token = jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "24h" });

			// Storing token
			res.cookie("jwt_token", token, { httpOnly: true, secure: true });
			res.status(200).json({ message: token });
		} else {
			res.status(401).json({ message: "Authentification failed." });
		}
	});
}

function auth(req, res, next) {
	console.log("Authentification in progress..");
	const cookie = req.headers.cookie;
	if (!cookie) return res.status(401).json({ message: "No cookies found" });

	// Get the token from request cookies
	let token = "";
	const cookies = cookie.split(";");
	for (const c of cookies) {
		if (c.trim().startsWith("jwt_token")) token = c.trim().split("=")[1];
	}

	if (!token) return res.status(401).json({ message: "No token found" });

	// If token, verify expiration date and validity
	jwt.verify(token, process.env.JWT_SECRET, {}, (err, decoded) => {
		if (err && err instanceof jwt.TokenExpiredError) {
			return res.status(401).json({ message: "Expired token : " + err });
		}

		if (err && err instanceof jwt.JsonWebTokenError) {
			return res.status(401).json({ message: "Invalid token : " + err });
		}
		next();
	});
}

function getUsers(req, res) {
	User.getAll((err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.json(results);
	});
}

function create_user(req, res) {
	const email = req.body.email;
	const password = req.body.password;
	const username = req.body.username;

	console.log("Creating user...");

	User.create_user(username, email, password, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.status(201).json(results);
	});
}

function get_steps(req, res) {
	console.log("REQUEST : " + req.body);
	const id_course = req.body.id_course;
	Step.get_steps(id_course, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		res.json(results);
	});
}

function execute_code(req, res) {
	const code = req.body.code;
	const step = req.body.step;
	console.log("EXECUTING...");
	Test.get_tests(step, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}

		// Do execute here
		console.log(results);

		res.json(results);
	});
}

export { auth, getUsers, login, create_user, execute_code, get_steps };
