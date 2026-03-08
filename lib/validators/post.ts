import { z } from 'zod';

export const postSchema = z.object({
  pageId: z.string().uuid(),
  content: z.string().min(5).max(5000),
  status: z.enum(['draft', 'scheduled', 'published']),
  scheduledAt: z.string().datetime().optional()
});
