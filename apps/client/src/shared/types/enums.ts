export const ProductType = {
   MONITORS: 'Monitors',
   LAPTOPS: 'Laptops',
   KEYBOARDS: 'Keyboards',
   MICE: 'Mice',
   PRINTERS: 'Printers',
   OTHER: 'Other',
} as const

export type ProductType = (typeof ProductType)[keyof typeof ProductType]

export const CurrencySymbol = {
   USD: 'USD',
   UAH: 'UAH',
} as const

export type CurrencySymbol = (typeof CurrencySymbol)[keyof typeof CurrencySymbol]
export type Sums = Partial<Record<CurrencySymbol, number>>
