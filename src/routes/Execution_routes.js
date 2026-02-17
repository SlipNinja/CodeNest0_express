import express from "express";
import { execute_code } from "../services/execution.js";

const exec_router = express.Router();

exec_router.post("/", execute_code);

export default exec_router;
