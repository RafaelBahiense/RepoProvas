import Joi from "joi";

export const testSchema = Joi.object({
    name: Joi.string().min(1),
    categoryId: Joi.number().min(1),
    subjectId: Joi.number().min(1),
    professorId: Joi.number().min(1),
    link: Joi.string().uri(),
});

export const idSchema = Joi.number().min(1);
