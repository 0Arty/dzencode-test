// price.service.ts
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { ProductPrice } from './entity'
import { Product } from '../product/entity'
import { CreatePriceDto } from './dto/create-price.dto'
import { UpdatePriceDto } from './dto/update-price.dto'
import { FindPricesQueryDto } from './dto/find-prices-query.dto'

@Injectable()
export class PriceService {
   constructor(
      @InjectRepository(ProductPrice)
      private readonly priceRepo: Repository<ProductPrice>,
      @InjectRepository(Product)
      private readonly productRepo: Repository<Product>,
   ) {}

   async create(dto: CreatePriceDto) {
      const product = await this.productRepo.findOneBy({ id: dto.productId })

      if (!product) {
         throw new NotFoundException('Product not found')
      }

      if (dto.isDefault) {
         await this.priceRepo.update(
            { product: { id: dto.productId } },
            { isDefault: false },
         )
      }

      const price = this.priceRepo.create({ ...dto, product })
      return this.priceRepo.save(price)
   }

   async findAll({ page, limit, productId }: FindPricesQueryDto) {
      const [items, total] = await this.priceRepo.findAndCount({
         where: productId ? { product: { id: productId } } : {},
         relations: { product: true },
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

   async update(id: number, dto: UpdatePriceDto) {
      const price = await this.priceRepo.findOne({
         where: { id },
         relations: { product: true },
      })

      if (!price) {
         throw new NotFoundException('Price not found')
      }

      if (dto.isDefault) {
         await this.priceRepo.update(
            { product: { id: price.product.id } },
            { isDefault: false },
         )
      }

      Object.assign(price, dto)
      return this.priceRepo.save(price)
   }

   async remove(id: number) {
      const result = await this.priceRepo.delete(id)

      if (!result.affected) {
         throw new NotFoundException('Price not found')
      }
   }
}
