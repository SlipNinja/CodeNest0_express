import express from "express";
import { auth, create_user, getUsers, login, execute_code, get_steps } from "./controller.js";

const router = express.Router();
router.use(express.json());

router.get("/users", getUsers);
router.get("/steps", get_steps);
router.post("/login", login);
router.post("/create", create_user);
router.post("/execute", auth, execute_code);

export default router;
