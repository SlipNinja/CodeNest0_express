import express from "express";
import { execute_code } from "../controllers/execution.controller.js";
import { auth } from "../services/authentification.js";

const exec_router = express.Router();

exec_router.post("/", auth, execute_code);

export default exec_router;
