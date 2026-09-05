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
import { ProductType } from '@types'
import { CreateProductPriceDto } from '../../order/dto/create-product-price.dto'

export class CreateProductDto {
   @IsOptional()
   @IsNumber()
   orderId?: number

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
   @Type(() => CreateProductPriceDto)
   @ArrayMinSize(1)
   prices!: CreateProductPriceDto[]
}
