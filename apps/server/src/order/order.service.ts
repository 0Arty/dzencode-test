// orders.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Order } from './entity'
import { Product } from '../product/entity'
import { ProductPrice } from '../price/entity'
import { CreateOrderDto } from './dto/create-order.dto'
import { PaginationQueryDto } from './dto/pagination-query.dto'

@Injectable()
export class OrdersService {
   constructor(
      @InjectRepository(Order)
      private readonly orderRepo: Repository<Order>,
      @InjectRepository(Product)
      private readonly productRepo: Repository<Product>,
      @InjectRepository(ProductPrice)
      private readonly priceRepo: Repository<ProductPrice>,
   ) {}

   async create(dto: CreateOrderDto) {
      const order = this.orderRepo.create(dto)
      return this.orderRepo.save(order)
   }

   async findAll({ page, limit }: PaginationQueryDto) {
      const [items, total] = await this.orderRepo.findAndCount({
         relations: { products: { prices: true } },
         order: { createdAt: 'DESC' },
         skip: (page - 1) * limit,
         take: limit,
      })

      return {
         items: items.map((order) => this.toListItem(order)),
         total,
         page,
         limit,
         pages: Math.ceil(total / limit),
      }
   }

   async findOne(id: number) {
      const order = await this.orderRepo.findOne({
         where: { id },
         relations: { products: { prices: true } },
      })

      if (!order) {
         throw new NotFoundException('Order not found')
      }

      return order
   }

   async remove(id: number) {
      const result = await this.orderRepo.delete(id)

      if (!result.affected) {
         throw new NotFoundException('Order not found')
      }
   }

   private toListItem(order: Order) {
      const sums: Record<string, number> = {}

      for (const product of order.products) {
         for (const price of product.prices) {
            sums[price.symbol] = (sums[price.symbol] ?? 0) + Number(price.value)
         }
      }

      return {
         id: order.id,
         title: order.title,
         createdAt: order.createdAt,
         productsCount: order.products.length,
         products: order.products,
         sums,
      }
   }
}
