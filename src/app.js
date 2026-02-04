import express from "express";
import router from "./routes/route.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import "dotenv/config";

const app = express();

app.use(
	cors({
		origin: ["http://localhost:4200", "http://localhost:3000"],
		allowedHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
);

app.use(express.json());
app.use(cookieParser());
app.use("/", router);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
