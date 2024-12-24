import { z } from 'zod';

export type UpdateProfileFormValues = z.infer<typeof UpdateProfileFormSchema>;

export const UpdateProfileFormSchema = z.object({
  nickname: z.string().max(20).nullable(),
  job: z
    .enum([
      'swe',
      'designer',
      'uiux',
      'student',
      'educator',
      'researcher',
      'pm',
      'data',
      'marketing',
      'creator',
      'business',
      'entrepreneur',
      'freelancer',
      'sales',
    ])
    .nullable(),
  thumbnailUrl: z.string().url().nullable(),
  prefersMac: z.boolean(),
});
