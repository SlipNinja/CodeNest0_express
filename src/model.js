import db from "./config_db.js";

class User {
	static get_all(callback) {
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

class Course {
	static get_one(id_course, callback) {
		const sql = `SELECT * FROM courses WHERE id_course = ${id_course}`;
		db.query(sql, callback);
	}

	static get_all(callback) {
		const sql = "SELECT * FROM courses";
		db.query(sql, callback);
	}

	static get_dependencies(id_course, callback) {
		const sql = `SELECT * FROM dependency_course WHERE id_course = ${id_course}`;
		db.query(sql, callback);
	}

	static get_course_taken(id_course, id_user, callback) {
		const sql = `SELECT * FROM course_taken WHERE id_course = ${id_course} AND id_user = ${id_user}`;
		db.query(sql, callback);
	}
}

class Tag {
	static get_by_course(id_course, callback) {
		const sql = `SELECT name FROM tags JOIN course_tag ON tags.id_tag = course_tag.id_tag WHERE id_course = ${id_course}`;
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

export { User, Course, Test, Step, Tag };
