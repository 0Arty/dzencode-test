import { IsEnum, IsNumber, IsOptional, IsBoolean } from 'class-validator'
import { CurrencySymbol } from '@types'

export class CreatePriceDto {
   @IsNumber()
   productId!: number

   @IsNumber()
   value!: number

   @IsEnum(CurrencySymbol)
   symbol!: CurrencySymbol

   @IsOptional()
   @IsBoolean()
   isDefault?: boolean
}
