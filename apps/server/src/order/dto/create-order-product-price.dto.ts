import { IsEnum, IsNumber, IsOptional, IsBoolean } from 'class-validator'
import { CurrencySymbol } from '@mono/types'

export class CreateOrderProductPriceDto {
   @IsNumber()
   value!: number

   @IsEnum(CurrencySymbol)
   symbol!: CurrencySymbol

   @IsOptional()
   @IsBoolean()
   isDefault?: boolean
}
