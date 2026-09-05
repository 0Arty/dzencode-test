import type { CurrencySymbol, ProductType } from '@shared/types'

export interface ProductPrice {
   id: number
   value: number
   symbol: CurrencySymbol
   isDefault: boolean
   product: Product
}
export interface Product {
   id: number
   title: string
   type: ProductType
   guarantee_start: Date
   guarantee_end: Date
   prices: ProductPrice[]

   order: Order | null

   createdAt: Date
}

export interface Order {
   id: number
   title: string
   description: string | null
   products: Product[]
   createdAt: Date
}

export interface PaginatedResponse<T> {
   items: T[]
   total: number
   page: number
   limit: number
   pages: number
}
