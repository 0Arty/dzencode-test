// price.controller.ts
import {
   Body,
   Controller,
   Delete,
   Param,
   ParseIntPipe,
   Patch,
   Post,
} from '@nestjs/common'
import { PriceService } from './price.service'
import { CreatePriceDto } from './dto/create-price.dto'
import { UpdatePriceDto } from './dto/update-price.dto'

@Controller('prices')
export class PriceController {
   constructor(private readonly priceService: PriceService) {}

   @Post()
   create(@Body() dto: CreatePriceDto) {
      return this.priceService.create(dto)
   }

   @Patch(':id')
   update(@Param('id', ParseIntPipe) id: number, @Body() dto: UpdatePriceDto) {
      return this.priceService.update(id, dto)
   }

   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
      return this.priceService.remove(id)
   }
}
