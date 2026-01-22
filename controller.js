import User from "./model.js";

function getUsers(req, res) {
	User.getAll((err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.json(results);
	});
}

function login(req, res) {
	const email = req.query.email;
	const password = req.query.password;
	User.login(email, password, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.json(results);
	});
}

function create_user(req, res) {
	const email = req.query.email;
	const password = req.query.password;
	const username = req.query.username;

	User.create_user(username, email, password, (err, results) => {
		if (err) {
			return res.status(500).json({ error: err });
		}
		res.json(results);
	});
}

export { getUsers, login, create_user };
