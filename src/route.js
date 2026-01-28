import express from "express";
import * as controller from "./controller.js";
import { login, auth } from "./authentification.js";

const router = express.Router();
router.use(express.json());

router.get("/users", controller.get_users);
router.get("/courses/:id", controller.get_course);
router.get("/steps", controller.get_steps);
router.post("/login", login);
router.post("/create", controller.create_user);
router.post("/execute", auth, controller.execute_code);

export default router;
