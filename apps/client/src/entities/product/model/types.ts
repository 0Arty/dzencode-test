import type { CreateProductPriceDto, ProductType } from '@shared/types'

export interface CreateProductDto {
   orderId?: number
   serialNumber: number
   isNew: boolean
   title: string
   type: ProductType
   specification: string
   guarantee_start: string
   guarantee_end: string
   prices: CreateProductPriceDto[]
}

export interface UpdateProductDto extends Partial<CreateProductDto> {
   id: string
}

export type ProductsTypesFilter = ProductType | null

export interface ProductState {
   productID: number | null
   productName: string
   activeFilter: ProductsTypesFilter
}

export interface DeleteProductRequest {
   productID: number
   productName: string
}

export interface AttachProductToOrder {
   productID: number
   orderID: number
}

export interface DetachProductFromOrder {
   productID: number
   orderID: number
}
