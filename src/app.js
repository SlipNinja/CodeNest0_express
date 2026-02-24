import express from "express";

import course_router from "./routes/course.route.js";
import user_router from "./routes/user.route.js";
import tag_router from "./routes/tag.route.js";
import step_router from "./routes/step.route.js";
import exec_router from "./routes/execution.route.js";

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

app.use(cookieParser());
app.use(express.json());
app.use("/courses", course_router);
app.use("/users", user_router);
app.use("/steps", step_router);
app.use("/tags", tag_router);
app.use("/execute", exec_router);

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Serveur lancé sur http://localhost:${PORT}`);
});
