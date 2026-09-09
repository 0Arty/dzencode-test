import { type CurrencySymbol } from '@shared/types/enums'

export type CreateProductPriceDto = Partial<Record<CurrencySymbol, number>>
