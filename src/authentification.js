import { User } from "./model.js";
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

export { login, auth };
