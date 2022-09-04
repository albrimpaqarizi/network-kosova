import Joi from 'joi';

export const RegisterFormSchema = Joi.object({
  fistName: Joi.string().trim().required().label('First name'),
  lastName: Joi.string().trim().required().label('Last name'),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .trim()
    .label('Email'),
  password: Joi.string().required().min(8).label('Password'),
});
