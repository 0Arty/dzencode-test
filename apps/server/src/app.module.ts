import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config/typeorm.config'

@Module({
   imports: [


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
