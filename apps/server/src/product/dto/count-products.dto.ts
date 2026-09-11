import { ProductType } from '@types'
import { IsEnum, IsOptional } from 'class-validator'

export class CountProductsQueryDto {
   @IsOptional()
   @IsEnum(ProductType)
   type?: ProductType
}
