import db from "./config_db.js";

class User {
	static getAll(callback) {
		const sql = "SELECT * FROM users";
		db.query(sql, callback);
	}

	static login(email, password, callback) {
		const sql = `SELECT * FROM users WHERE email = "${email}" AND password = "${password}"`;
		db.query(sql, callback);
	}

	static create_user(username, email, password, callback) {
		const sql = `INSERT INTO \`users\` (\`username\`, \`email\`, \`experience\`, \`photo\`, \`password\`)
                    VALUES ('${username}', '${email}', 0, 1, '${password}')`;
		db.query(sql, callback);
	}
}

class Step {
	static get_steps(id_course, callback) {
		const sql = `SELECT * FROM steps WHERE id_course = ${id_course}`;
		db.query(sql, callback);
	}
}

class Test {
	static get_tests(step, callback) {
		const sql = `SELECT * FROM tests WHERE id_step = ${step["id_step"]}`;
		db.query(sql, callback);
	}
}

export { User, Test, Step };
