import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ProductPrice } from './entity'
import { PriceController } from './price.controller'
import { PriceService } from './price.service'
import { Product } from '../product/entity'

@Module({
   imports: [TypeOrmModule.forFeature([ProductPrice, Product])],
   controllers: [PriceController],
   providers: [PriceService],
})
export class PriceModule {}
