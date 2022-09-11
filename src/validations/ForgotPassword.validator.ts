import zod from 'zod';

export const ForgotPasswordFormSchema = zod.object({
  email: zod
    .string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
    .email(),
});
