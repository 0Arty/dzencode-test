import { Type } from 'class-transformer'
import { IsInt, IsOptional, IsNumber, Min } from 'class-validator'

export class FindPricesQueryDto {
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
   @Type(() => Number)
   @IsNumber()
   productId?: number
}
