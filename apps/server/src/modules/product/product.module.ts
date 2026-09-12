import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Product } from './entity'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { Order } from '../order/entity'
import { ProductPrice } from '../price/entity'

@Module({
   imports: [TypeOrmModule.forFeature([Product, Order, ProductPrice])],
   controllers: [ProductController],
   providers: [ProductService],
   exports: [ProductService],
})
export class ProductModule {}
