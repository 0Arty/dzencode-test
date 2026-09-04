import { Repository } from 'typeorm'
import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Car } from './entity'
import { CreateCarDTO } from './dto'
import { BrandService } from '../brand/brand.service'

@Injectable()
export class CarService {
   constructor(
      @InjectRepository(Car)
      private carRepository: Repository<Car>,
      private brandService: BrandService,
   ) {}

   getAllCars() {
      return this.carRepository
         .createQueryBuilder('car')
         .leftJoinAndSelect('car.brand', 'brand')
         .getMany()
   }

   async getCarById(id: number) {
      const car = await this.carRepository.findOneBy({ id })
      if (!car) {
         throw new NotFoundException(`Car with id ${id} is not found`)
      } else {
         return car
      }
   }

   async createCar(dto: CreateCarDTO) {
      const model = dto.model
      const color = dto.color.toLowerCase()
      const year = dto.year
      const price = dto.price

      const brand = await this.brandService.getOne(dto.brand)

      const carDetails = { model, color, year, price, brand }
      const car = this.carRepository.create(carDetails)

      return this.carRepository.save(car)
   }
}
