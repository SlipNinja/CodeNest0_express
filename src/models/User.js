import db from "../config/database.js";

export default class User {
	static async get_all() {
		const sql = "SELECT * FROM users";
		return await db.execute(sql);
	}

	static async get_one(id_user) {
		const sql = `SELECT * FROM users WHERE id_user = ${id_user}`;
		return await db.execute(sql);
	}

	static async login(email) {
		const sql = `SELECT * FROM users WHERE email = "${email}"`;
		return await db.execute(sql);
	}

	static async create_user(username, email, password) {
		const sql = `INSERT INTO \`users\` (\`username\`, \`email\`, \`experience\`, \`photo\`, \`password\`)
                    VALUES ('${username}', '${email}', 0, 'empty_profile.png', '${password}')`;
		return await db.execute(sql);
	}

	static async delete_user(id_user) {
		const sql = `DELETE FROM users WHERE id_user = "${id_user}"`;
		return await db.execute(sql);
	}

	static async update_user(id_user, username, email) {
		let fields;

		if (username && email) {
			fields = `username = '${username}', email = '${email}' `;
		} else if (username) {
			fields = `username = '${username}'`;
		} else {
			fields = `email = '${email}'`;
		}

		const sql = `UPDATE users SET ${fields} WHERE id_user = "${id_user}"`;
		return await db.execute(sql);
	}
}
