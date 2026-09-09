import type { CreateProductPriceDto, ProductType } from '@shared/types'

export interface CreateProductDto {
   orderId?: number
   serialNumber: number
   isNew?: boolean
   photo?: string
   title: string
   type: ProductType
   specification?: string
   guarantee_start: string
   guarantee_end: string
   prices: CreateProductPriceDto[]
}

export interface UpdateProductDto extends Partial<CreateProductDto> {
   id: string
}
