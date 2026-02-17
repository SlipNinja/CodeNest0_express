import express from "express";

import * as user_ctrl from "../controllers/User_controller.js";
import { auth } from "../services/authentification.js";
import { user_schema } from "../../validators/User_validator.js";
import { validate_user } from "../../middlewares/validate.js";

const user_router = express.Router();

user_router.get("/", user_ctrl.get_users);
user_router.delete("/:id", auth, user_ctrl.delete_user);
user_router.put("/:id", auth, user_ctrl.update_user);
user_router.post("/", validate_user(user_schema), user_ctrl.create_user);
user_router.post("/login", user_ctrl.login);

export default user_router;
