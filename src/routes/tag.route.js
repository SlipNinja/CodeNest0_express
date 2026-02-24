import express from "express";
import * as tag_ctrl from "../controllers/tag.controller.js";

const tag_router = express.Router();

tag_router.get("/course/:id", tag_ctrl.get_tags_by_course);

export default tag_router;
