import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { Car } from './entity'

import { CarCotroller } from './car.controller'
import { CarService } from './car.service'
import { Brand } from '../brand/entity'
import { BrandModule } from '../brand/brand.module'

const entities = [Car, Brand]

@Module({
   imports: [TypeOrmModule.forFeature(entities), BrandModule],
   controllers: [CarCotroller],
   providers: [CarService],
})
export class CarModule {}
