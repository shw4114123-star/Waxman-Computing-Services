import { z } from 'zod';

export const leadSchema = z.object({
  body: z.object({
    name: z.string({ required_error: 'שם מלא הוא שדה חובה' }).min(2, 'שם מלא חייב להכיל לפחות 2 תווים'),
    phone: z.string({ required_error: 'מספר טלפון הוא שדה חובה' }).min(10, 'מספר טלפון חייב להכיל לפחות 10 ספרות'),
    businessName: z.string().optional(),
    workstationsCount: z.union([z.number(), z.string()]).optional(),
    interestedIn: z.array(z.string()).optional(),
    notes: z.string().optional()
  })
});
