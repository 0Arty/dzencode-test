// dto/update-product.dto.ts
import { PartialType, OmitType } from '@nestjs/mapped-types'
import { CreateProductDto } from './create-product.dto'

export class UpdateProductDto extends PartialType(
   OmitType(CreateProductDto, ['orderId', 'prices'] as const),
) {}
