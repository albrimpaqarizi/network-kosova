import zod from 'zod';

export const LoginFormSchema = zod.object({
  email: zod
    .string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
    .email(),
  password: zod.string({ required_error: 'Password is required' }),
  // .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});
