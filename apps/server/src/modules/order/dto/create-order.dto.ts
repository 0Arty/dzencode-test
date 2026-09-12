// order/dto/create-order.dto.ts
import { IsString, IsOptional } from 'class-validator'

export class CreateOrderDto {
   @IsString()
   title!: string

   @IsOptional()
   @IsString()
   description?: string
}
