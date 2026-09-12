// product.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { Product } from './entity'
import { Order } from '../order/entity'
import { ProductPrice } from '../price/entity'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { FindProductsQueryDto } from './dto/find-products-query.dto'
import { ProductType } from '@types'

@Injectable()
export class ProductService {
   constructor(
      @InjectRepository(Product)
      private readonly productRepo: Repository<Product>,
      @InjectRepository(Order)
      private readonly orderRepo: Repository<Order>,
      @InjectRepository(ProductPrice)
      private readonly priceRepo: Repository<ProductPrice>,
   ) {}

   async create(dto: CreateProductDto) {
      let order: Order | null = null

      if (dto.orderId) {
         order = await this.orderRepo.findOneBy({ id: dto.orderId })
         if (!order) throw new NotFoundException('Order not found')
      }

      const product = this.productRepo.create({
         ...dto,
         order,
         prices: dto.prices.map((price) => this.priceRepo.create(price)),
      })

      return this.productRepo.save(product)
   }

   async findAll({ page, limit, type }: FindProductsQueryDto) {
      const [items, total] = await this.productRepo.findAndCount({
         where: type ? { type } : {},
         relations: { order: true },
         order: { createdAt: 'DESC' },
         skip: (page - 1) * limit,
         take: limit,
      })

      return {
         items,
         total,
         page,
         limit,
         pages: Math.ceil(total / limit),
      }
   }

   async getProductsTotalCount(type?: ProductType): Promise<number> {
      const total = await this.productRepo.count({
         where: type ? { type } : {},
      })
      return total
   }

   async findOne(id: number) {
      const product = await this.productRepo.findOne({
         where: { id },
         relations: { order: true },
      })

      if (!product) {
         throw new NotFoundException('Product not found')
      }

      return product
   }

   async update(id: number, dto: UpdateProductDto) {
      const product = await this.findOne(id)
      Object.assign(product, dto)
      return this.productRepo.save(product)
   }

   async remove(id: number) {
      const result = await this.productRepo.delete(id)
      if (!result.affected) throw new NotFoundException('Product not found')
   }

   async detachFromOrder(productId: number) {
      const product = await this.productRepo.findOneBy({ id: productId })
      if (!product) throw new NotFoundException('Product not found')

      product.order = null
      return this.productRepo.save(product)
   }

   async attachToOrder(productId: number, orderId: number) {
      const product = await this.productRepo.findOneBy({ id: productId })
      if (!product) throw new NotFoundException('Product not found')

      const order = await this.orderRepo.findOneBy({ id: orderId })
      if (!order) throw new NotFoundException('Order not found')

      product.order = order
      return this.productRepo.save(product)
   }
}
