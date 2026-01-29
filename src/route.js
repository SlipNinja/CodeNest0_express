import express from "express";
import * as controller from "./controller.js";
import { login, auth } from "./authentification.js";

const router = express.Router();
router.use(express.json());

// Course
router.get("/courses", controller.get_courses);
router.get("/courses/:id", controller.get_course);

// User
router.get("/users", controller.get_users);

// Step
router.get("/steps", controller.get_steps);

// Authentification
router.post("/login", login);
router.post("/create", controller.create_user);

// Execute
router.post("/execute", auth, controller.execute_code);

export default router;
