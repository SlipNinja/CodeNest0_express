import fs from "fs";

export default class FileManager {
	static write(path, data) {
		return fs.writeFileSync(path, data);
	}

	static delete(path) {
		return fs.unlink(path, (err) => {
			if (err) {
				throw new Error(`Can't delete file "${path}" : ${err.message}`);
			}
			console.log(`File "${path}" successfully deleted.`);
		});
	}
}
