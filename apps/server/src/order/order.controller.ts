// order.controller.ts
import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   ParseIntPipe,
   Post,
   Query,
} from '@nestjs/common'
import { OrdersService } from './order.service'
import { CreateOrderDto } from './dto/create-order.dto'
import { PaginationQueryDto } from './dto/pagination-query.dto'

@Controller('orders')
export class OrderController {
   constructor(private readonly ordersService: OrdersService) {}

   @Post()
   create(@Body() dto: CreateOrderDto) {
      return this.ordersService.create(dto)
   }

   @Get()
   findAll(@Query() query: PaginationQueryDto) {
      return this.ordersService.findAll(query)
   }

   @Get(':id')
   findOne(@Param('id', ParseIntPipe) id: number) {
      return this.ordersService.findOne(id)
   }

   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
      return this.ordersService.remove(id)
   }
}
