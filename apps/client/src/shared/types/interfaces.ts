import type { CurrencySymbol, ProductType, Sums } from '@shared/types'

export interface ProductPrice {
   id: number
   value: number
   symbol: CurrencySymbol
   isDefault: boolean
   product?: Product
}
export interface Product {
   id: number
   title: string
   serialNumber: string
   isNew: boolean
   specification: string
   type: ProductType
   guarantee_start: Date
   guarantee_end: Date
   createdAt: Date
   order: Order | null
   prices: ProductPrice[]
}

export interface Order {
   id: number
   title: string
   description: string | null
   products: Product[]
   createdAt: Date
   productsCount: number
   sums: Sums
}

export interface PaginatedResponse<T> {
   items: T[]
   total: number
   page: number
   limit: number
   pages: number
}

export interface CreateProductPriceDto {
   value: number
   symbol: CurrencySymbol
   isDefault?: boolean
}

export interface SelectOptions<T = string | number> {
   value: T
   title: string
}
