import Joi from 'joi';

export const LoginFormSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .trim()
    .label('Email'),
  password: Joi.string().required().min(8).label('Password'),
});
