import express from "express";
import { create_user, getUsers, login } from "./controller.js";

const router = express.Router();

router.get("/users", getUsers);
router.get("/login", login);
router.post("/create", create_user);

export default router;
