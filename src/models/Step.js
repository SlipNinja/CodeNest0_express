import db from "./config_db.js";

export default class Step {
	static get_steps(id_course, callback) {
		const sql = `SELECT * FROM steps WHERE id_course = ${id_course}`;
		db.query(sql, callback);
	}
}
