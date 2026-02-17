import express from "express";
import * as course_ctrl from "../controllers/Course_controller.js";
import { auth } from "../services/authentification.js";

const course_router = express.Router();

// Course
course_router.get("/", course_ctrl.get_courses);
course_router.get("/taken", course_ctrl.get_course_taken);
course_router.get("/:id", course_ctrl.get_course);
course_router.get("/:id/dependencies", course_ctrl.get_dependencies);
course_router.get("/:id/steps", auth, course_ctrl.get_steps);

export default course_router;
