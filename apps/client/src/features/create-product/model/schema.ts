import { CurrencySymbol, ProductType } from '@shared/types'
import { z } from 'zod'

export const schema = z.object({
   orderId: z.preprocess(value => (value === '' ? undefined : Number(value)), z.number().optional()), //

   serialNumber: z.coerce.number().min(1, 'Required'), //

   isNew: z.boolean(),

   title: z.string().trim().min(2, 'Required'), //

   type: z.enum(ProductType), //

   specification: z.string().trim().min(2, 'Required'), //

   guarantee_start: z.string().min(1, 'Required'), //

   guarantee_end: z.string().min(1, 'Required'), //

   priceUAH: z.coerce.number().min(0, 'Required'),

   priceUSD: z.coerce.number().min(0, 'Required'),
})

export type FormInput = z.input<typeof schema>
export type FormOutput = z.output<typeof schema>
