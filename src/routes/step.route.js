import express from "express";
import * as step_ctrl from "../controllers/step.controller.js";
import { auth } from "../services/authentification.js";

const step_router = express.Router();

step_router.get("/", auth, step_ctrl.get_steps);

export default step_router;
