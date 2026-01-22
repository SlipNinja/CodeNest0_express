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

export default User;
