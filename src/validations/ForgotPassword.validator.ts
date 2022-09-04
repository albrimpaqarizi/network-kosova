import Joi from 'joi';

export const ForgotPasswordFormSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .trim()
    .required()
    .label('Email'),
});
