import express from "express";

import * as user_ctrl from "../controllers/User_controller.js";
import * as course_ctrl from "../controllers/Course_controller.js";
import * as step_ctrl from "../controllers/Step_controller.js";
import * as tag_ctrl from "../controllers/Tag_controller.js";

import { auth } from "../services/authentification.js";
import { execute_code } from "../services/execution.js";

const router = express.Router();

// Course
router.get("/courses", course_ctrl.get_courses);
router.get("/courses/:id", course_ctrl.get_course);
router.get("/courses/:id/dependencies", course_ctrl.get_dependencies);
router.get("/courses_taken", course_ctrl.get_course_taken);

// Tag
router.get("/courses/:id/tags", tag_ctrl.get_tags_by_course);

// User
router.get("/users", user_ctrl.get_users);
router.delete("/users/:id", auth, user_ctrl.delete_user);
router.post("/create", user_ctrl.create_user);

// Step
router.get("/steps", step_ctrl.get_steps);

// Authentification
router.post("/login", user_ctrl.login);

// Execute
router.post("/execute", execute_code);

export default router;
