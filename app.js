import express from "express";
import router from "./route.js";
import cors from "cors";

const app = express();

app.use(cors());
app.use("/", router);
app.use(express.json());

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
