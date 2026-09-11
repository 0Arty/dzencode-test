import { z } from 'zod'

export const schema = z.object({
   title: z.string().trim().min(2, 'Order name is required'),
})
