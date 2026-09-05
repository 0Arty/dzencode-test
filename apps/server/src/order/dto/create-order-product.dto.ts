import { Type } from 'class-transformer'
import {
   IsString,
   IsEnum,
   IsNumber,
   IsOptional,
   IsBoolean,
   IsDateString,
   ValidateNested,
   ArrayMinSize,
} from 'class-validator'
import { ProductType } from '@mono/types'
import { CreateOrderProductPriceDto } from './create-order-product-price.dto'

export class CreateOrderProductDto {
   @IsNumber()
   serialNumber!: number

   @IsOptional()
   @IsBoolean()
   isNew?: boolean

   @IsOptional()
   @IsString()
   photo?: string

   @IsString()
   title!: string

   @IsEnum(ProductType)
   type!: ProductType

   @IsOptional()
   @IsString()
   specification?: string

   @IsDateString()
   guarantee_start!: string

   @IsDateString()
   guarantee_end!: string

   @ValidateNested({ each: true })
   @Type(() => CreateOrderProductPriceDto)
   @ArrayMinSize(1)
   prices!: CreateOrderProductPriceDto[]
}
