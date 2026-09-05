import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config/typeorm.config'
import { join } from 'path'
import { ProductModule } from './product/product.module'
import { PriceModule } from './price/price.module'
import { OrderModule } from './order/order.module'

@Module({
   imports: [
      PriceModule,
      ProductModule,
      OrderModule,

      ConfigModule.forRoot({
         envFilePath: [
            join(__dirname, '../../../.env'),
            join(process.cwd(), '.env'),
         ],
         isGlobal: true,
      }),

      TypeOrmModule.forRootAsync({
         imports: [ConfigModule],
         useFactory: getTypeOrmConfig,
         inject: [ConfigService],
      }),
   ],
})
export class AppModule {}
