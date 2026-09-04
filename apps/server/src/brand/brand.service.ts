import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Brand } from './entity'
import { Repository } from 'typeorm'
import { CreateBrandDTO } from './dto/brand.dto'

@Injectable()
export class BrandService {
   constructor(
      @InjectRepository(Brand)
      private brandRepository: Repository<Brand>,
   ) {}

   getAllBrands() {
      return this.brandRepository.find()
   }

   async getOne(id: number) {
      const brand = await this.brandRepository.findOneBy({ id })
      if (!brand) {
         throw new NotFoundException(`Brand ${id} is not found`)
      } else {
         return brand
      }
   }

   createBrand(body: CreateBrandDTO) {
      const name = body.name.toLowerCase()
      const brandDetails = { name }

      const brand = this.brandRepository.create(brandDetails)
      return this.brandRepository.save(brand)
   }
}
