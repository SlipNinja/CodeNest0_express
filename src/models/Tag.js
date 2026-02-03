import db from "../config_db.js";

export default class Tag {
	static get_by_course(id_course, callback) {
		const sql = `SELECT name FROM tags JOIN course_tag ON tags.id_tag = course_tag.id_tag WHERE id_course = ${id_course}`;
		db.query(sql, callback);
	}
}
