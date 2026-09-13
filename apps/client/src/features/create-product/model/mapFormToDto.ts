import type { CreateProductDto } from '@entities/product'

import { CurrencySymbol } from '@shared/types'

import { type FormOutput } from './schema'

export const mapFormToDto = (data: FormOutput): CreateProductDto => ({
   title: data.title,
   serialNumber: data.serialNumber,
   specification: data.specification,
   guarantee_start: data.guarantee_start,
   guarantee_end: data.guarantee_end,
   type: data.type,
   isNew: data.isNew,

   prices: [
      {
         value: data.priceUAH,
         symbol: CurrencySymbol.UAH,
         isDefault: true,
      },
      {
         value: data.priceUSD,
         symbol: CurrencySymbol.USD,
         isDefault: false,
      },
   ],
})
