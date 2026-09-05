import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Order } from './entity'
import { OrderController } from './order.controller'
import { OrdersService } from './order.service'
import { Product } from '../product/entity'
import { ProductPrice } from '../price/entity'

@Module({
   imports: [TypeOrmModule.forFeature([Order, Product, ProductPrice])],
   controllers: [OrderController],
   providers: [OrdersService],
})
export class OrderModule {}
