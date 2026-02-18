import db from "../config/database.js";

export default class Course {
	static async get_one(id_course) {
		const sql = `SELECT * FROM courses WHERE id_course = ${id_course}`;
		return await db.execute(sql);
	}

	static async get_all() {
		const sql = "SELECT * FROM courses";
		return await db.execute(sql);
	}

	static async get_dependencies(id_course) {
		const sql = `SELECT * FROM dependency_course WHERE id_course = ${id_course}`;
		return await db.execute(sql);
	}

	static async get_course_taken(id_course, id_user) {
		const sql = `SELECT * FROM course_taken WHERE id_course = "${id_course}" AND id_user = "${id_user}"`;
		return await db.execute(sql);
	}

	static async update_course_taken(id_course, id_user, last_finished_step) {
		const sql = `UPDATE course_taken SET last_finished_step = "${last_finished_step}" WHERE id_course = "${id_course}" AND id_user = "${id_user}"`;
		return await db.execute(sql);
	}

	static async get_course_steps(id_course) {
		const sql = `SELECT * FROM steps WHERE id_course = "${id_course}"`;
		return await db.execute(sql);
	}
}
