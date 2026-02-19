import Course from "../models/Course.js";

export async function get_course(req, res) {
	const id_course = req.params.id;
	const results = await Course.get_one(id_course);
	res.status(200).json(results[0]);
}

export async function get_courses(req, res) {
	const results = await Course.get_all();
	res.status(200).json(results[0]);
}

export async function get_courses_for_user(req, res) {
	const id_user = req.params.id;
	const results = await Course.get_all_for_user(id_user);
	res.status(200).json(results[0]);
}

export async function get_course_taken(req, res) {
	const id_course = req.query.id_course;
	const id_user = req.query.id_user;
	const results = await Course.get_course_taken(id_course, id_user);
	res.status(200).json(results[0]);
}

export async function get_dependencies(req, res) {
	const id_course = req.params.id;
	const results = await Course.get_dependencies(id_course);
	res.status(200).json(results[0]);
}

export async function get_steps(req, res) {
	const id_course = req.params.id;
	const results = await Course.get_course_steps(id_course);
	res.status(200).json(results[0]);
}

export async function update_course_taken(req, res) {
	const { id_course, id_user, last_finished_step } = req.body;
	const results = await Course.update_course_taken(id_course, id_user, last_finished_step);
	res.status(200).json(results[0]);
}
