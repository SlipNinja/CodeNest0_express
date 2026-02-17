import express from "express";
import { execute_code } from "../controllers/Execution_controller.js";

const exec_router = express.Router();

exec_router.post("/", execute_code);

export default exec_router;
