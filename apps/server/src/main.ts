import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'

async function start() {
   const PORT = process.env.SERVER_PORT ?? 3000

   const app = await NestFactory.create(AppModule)

   app.useGlobalPipes(
      new ValidationPipe({
         transform: true,
         transformOptions: { enableImplicitConversion: true },
      }),
   )

   await app.listen(PORT, () => {
      console.log(`Server is started on port ${PORT}`)
   })
}
start()
