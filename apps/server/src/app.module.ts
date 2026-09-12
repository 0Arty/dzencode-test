import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config/typeorm.config'
import { join } from 'path'
import { ProductModule } from './modules/product/product.module'
import { PriceModule } from './modules/price/price.module'
import { OrderModule } from './modules/order/order.module'
import { ActiveTabsModule } from './modules/active-tabs/active-tabs.module'

@Module({
   imports: [
      PriceModule,
      ProductModule,
      OrderModule,
      ActiveTabsModule,

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
