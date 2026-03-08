import { z } from 'zod';

export const pageSchema = z.object({
  facebookPageId: z.string().min(2),
  pageName: z.string().min(2),
  accessToken: z.string().min(10)
});
