import jwt from "jsonwebtoken";

// Create and returns JWT from user
export function create_token(user) {
	// Dont send password in token
	delete user["password"];

	// Encoding token
	return jwt.sign({ user }, process.env.JWT_SECRET, { expiresIn: "24h" });
}

export function auth(req, res, next) {
	const cookie = req.headers.cookie;
	if (!cookie) return res.status(401).json({ message: "No cookies found" });

	// Get the token from request cookies
	const cookies = cookie.split(";");
	let token = cookies.find((c) => c.trim().startsWith("jwt_token"));

	if (!token) return res.status(401).json({ message: "No token found" });
	token = token.trim().split("=")[1];

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
