import db from "../config/database.js";

export default class Test {
	static get_tests(step, callback) {
		const sql = `SELECT * FROM tests WHERE id_step = ${step["id_step"]}`;
		db.query(sql, callback);
	}
}
