import { Module } from '@nestjs/common'
import { CarModule } from './car'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config/typeorm.config'
import { BrandModule } from './brand/brand.module'

@Module({
   imports: [
      CarModule,
      BrandModule,
      ConfigModule.forRoot({
         envFilePath: `.env`,
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
