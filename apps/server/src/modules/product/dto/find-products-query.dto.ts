// dto/find-products-query.dto.ts
import { Type } from 'class-transformer'
import { IsEnum, IsInt, IsOptional, Min } from 'class-validator'
import { ProductType } from '@types'

export class FindProductsQueryDto {
   @IsOptional()
   @Type(() => Number)
   @IsInt()
   @Min(1)
   page: number = 1

   @IsOptional()
   @Type(() => Number)
   @IsInt()
   @Min(1)
   limit: number = 10

   @IsOptional()
   @IsEnum(ProductType)
   type?: ProductType
}
