import db from "../config/database.js";

export default class Tag {
	static async get_by_course(id_course) {
		const sql = `SELECT name FROM tags JOIN course_tag ON tags.id_tag = course_tag.id_tag WHERE id_course = ${id_course}`;
		return await db.execute(sql);
	}
}
