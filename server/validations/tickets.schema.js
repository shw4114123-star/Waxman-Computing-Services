import { z } from 'zod';

export const ticketSchema = z.object({
  body: z.object({
    clientName: z.string({ required_error: 'שם איש קשר הוא שדה חובה' }).min(2, 'שם איש קשר חייב להכיל לפחות 2 תווים'),
    phone: z.string({ required_error: 'מספר טלפון הוא שדה חובה' }).min(10, 'מספר טלפון חייב להכיל לפחות 10 ספרות'),
    issueType: z.enum(['remote_support', 'lab_repair', 'network_issue', 'cameras'], {
      errorMap: () => ({ message: 'סוג תקלה לא תקין' })
    }),
    urgency: z.enum(['normal', 'high', 'critical']).optional().default('normal'),
    description: z.string({ required_error: 'תיאור התקלה הוא שדה חובה' }).min(5, 'תיאור התקלה חייב להכיל לפחות 5 תווים')
  })
});
