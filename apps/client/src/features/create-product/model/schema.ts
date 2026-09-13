import { z } from 'zod'

import { ProductType } from '@shared/types'

export const schema = z.object({
   orderId: z.preprocess(value => (value === '' ? undefined : Number(value)), z.number().optional()), //

   serialNumber: z.coerce.number().min(1, 'Serial number is required'), //

   isNew: z.boolean(),

   title: z.string().trim().min(2, 'Title is required'), //

   type: z.enum(ProductType), //

   specification: z.string().trim().min(2, 'Specification is required'), //

   guarantee_start: z.string().min(1, 'Guarantee start is required'), //

   guarantee_end: z.string().min(1, 'Guarantee end is required'), //

   priceUAH: z.coerce.number().min(1, 'Price in UAH is required'),

   priceUSD: z.coerce.number().min(1, 'Price in USD is required'),
})

export type FormInput = z.input<typeof schema>
export type FormOutput = z.output<typeof schema>
