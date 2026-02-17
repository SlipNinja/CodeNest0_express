import express from "express";
import * as step_ctrl from "../controllers/Step_controller.js";

const step_router = express.Router();

step_router.get("/", step_ctrl.get_steps);

export default step_router;
