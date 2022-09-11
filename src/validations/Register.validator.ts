import zod from 'zod';

export const RegisterFormSchema = zod.object({
  fistName: zod.string({
    required_error: 'First name is required',
    invalid_type_error: 'First name must be a string',
  }),
  lastName: zod.string({
    required_error: 'Last name is required',
    invalid_type_error: 'Last name must be a string',
  }),
  email: zod
    .string({ required_error: 'Email is required', invalid_type_error: 'Email must be a string' })
    .email(),
  password: zod
    .string({ required_error: 'Password is required' })
    .regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/),
});
