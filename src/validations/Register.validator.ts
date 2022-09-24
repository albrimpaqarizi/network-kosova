import zod from 'zod';

export const RegisterFormSchema = zod
  .object({
    fullName: zod.string({
      required_error: 'Full name is required',
      invalid_type_error: 'Full name must be a string',
    }),
    gender: zod.string({
      required_error: 'Gender is required',
    }),
    email: zod
      .string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
      .email(),
    password: zod
      .string({ required_error: 'Password is required' })
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
    confirmPassword: zod
      .string({ required_error: 'Confirm password is required' })
      .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'custom',
        path: ['confirmPassword'],
        message: 'The passwords did not match',
      });
    }
  });
