import db from "../config_db.js";

export default class User {
	static get_all(callback) {
		const sql = "SELECT * FROM users";
		db.query(sql, callback);
	}

	static login(email, callback) {
		const sql = `SELECT * FROM users WHERE email = "${email}"`;
		db.query(sql, callback);
	}

	static create_user(username, email, password, callback) {
		const sql = `INSERT INTO \`users\` (\`username\`, \`email\`, \`experience\`, \`photo\`, \`password\`)
                    VALUES ('${username}', '${email}', 0, 'empty_profile.png', '${password}')`;
		db.query(sql, callback);
	}
}
