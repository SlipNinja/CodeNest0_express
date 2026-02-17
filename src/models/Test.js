import db from "../config/database.js";

export default class Test {
	static async get_tests(id_step) {
		const sql = `SELECT * FROM tests WHERE id_step = ${id_step}`;
		return await db.execute(sql);
	}
}
