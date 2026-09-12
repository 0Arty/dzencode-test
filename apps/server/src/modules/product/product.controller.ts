// product.controller.ts
import {
   Body,
   Controller,
   Delete,
   Get,
   Param,
   ParseIntPipe,
   Patch,
   Post,
   Query,
} from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { FindProductsQueryDto } from './dto/find-products-query.dto'
import { CountProductsQueryDto } from './dto/count-products.dto'

@Controller('products')
export class ProductController {
   constructor(private readonly productService: ProductService) {}

   @Post()
   create(@Body() dto: CreateProductDto) {
      return this.productService.create(dto)
   }

   @Get()
   findAll(@Query() query: FindProductsQueryDto) {
      return this.productService.findAll(query)
   }

   @Get('/total')
   getProductsTotalCount(@Query() query: CountProductsQueryDto) {
      return this.productService.getProductsTotalCount(query.type)
   }

   @Get(':id')
   findOne(@Param('id', ParseIntPipe) id: number) {
      return this.productService.findOne(id)
   }

   @Patch(':id')
   update(
      @Param('id', ParseIntPipe) id: number,
      @Body() dto: UpdateProductDto,
   ) {
      return this.productService.update(id, dto)
   }

   @Delete(':id')
   remove(@Param('id', ParseIntPipe) id: number) {
      return this.productService.remove(id)
   }

   @Patch(':id/attach-order/:orderId')
   attachToOrder(
      @Param('id', ParseIntPipe) id: number,
      @Param('orderId', ParseIntPipe) orderId: number,
   ) {
      return this.productService.attachToOrder(id, orderId)
   }

   @Patch(':id/detach-order')
   detachFromOrder(@Param('id', ParseIntPipe) id: number) {
      return this.productService.detachFromOrder(id)
   }
}
