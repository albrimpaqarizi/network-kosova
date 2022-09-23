import zod from 'zod';

export const ProfileFormSchema = zod.object({
  fullName: zod.string({
    required_error: 'Full name is required',
    invalid_type_error: 'Full name must be a string',
  }),
});
