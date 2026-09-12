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
   IsNotEmpty,
} from 'class-validator'
import { ProductType } from '@types'
import { CreateProductPriceDto } from '../../order/dto/create-product-price.dto'

export class CreateProductDto {
   @IsOptional()
   @IsNumber()
   orderId?: number

   @IsNumber()
   @IsNotEmpty()
   serialNumber!: number

   @IsBoolean()
   @IsNotEmpty()
   isNew!: boolean

   @IsOptional()
   @IsString()
   photo?: string

   @IsString()
   @IsNotEmpty()
   title!: string

   @IsEnum(ProductType)
   @IsNotEmpty()
   type!: ProductType

   @IsString()
   @IsNotEmpty()
   specification!: string

   @IsDateString()
   @IsNotEmpty()
   guarantee_start!: string

   @IsDateString()
   @IsNotEmpty()
   guarantee_end!: string

   @ValidateNested({ each: true })
   @Type(() => CreateProductPriceDto)
   @ArrayMinSize(1)
   prices!: CreateProductPriceDto[]
}
