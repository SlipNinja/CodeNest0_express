import db from "../config_db.js";

export default class Course {
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
