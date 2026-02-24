import db from "../config/database.js";

export default class Step {
	static async get_steps(id_course) {
		const sql = `SELECT * FROM steps WHERE id_course = ${id_course}`;
		return await db.execute(sql);
	}
}
