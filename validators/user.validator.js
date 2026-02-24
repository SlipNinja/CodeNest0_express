import Joi from "joi";

export const user_schema = Joi.object({
	username: Joi.string().alphanum().min(5).max(20).required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(8).max(20).required(),
});
