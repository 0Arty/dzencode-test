import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { TypeOrmModule } from '@nestjs/typeorm'
import { getTypeOrmConfig } from './config/typeorm.config'
import { join } from 'path'

@Module({
   imports: [
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
