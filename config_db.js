import mysql from "mysql2";

const MySQL_PORT = 3306;
const db = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	database: "codenest0",
	port: MySQL_PORT,
});

db.connect((err) => {
	if (err) {
		console.error("Connexion error : " + err);
	} else {
		console.log("Connexion successfull with MySQL at port " + MySQL_PORT);
	}
});

export default db;
