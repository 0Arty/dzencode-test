import { PartialType, OmitType } from '@nestjs/mapped-types'
import { CreatePriceDto } from './create-price.dto'

export class UpdatePriceDto extends PartialType(
   OmitType(CreatePriceDto, ['productId'] as const),
) {}
