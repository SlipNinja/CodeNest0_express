import db from "../config/database.js";

export default class Param {
	static async get_params(id_test) {
		const sql = `SELECT * FROM params WHERE id_test = ${id_test}`;
		return await db.execute(sql);
	}
}
