import {
   Body,
   Controller,
   Get,
   Param,
   ParseIntPipe,
   Post,
   Query,
} from '@nestjs/common'

import { CarService } from './car.service'
import { CreateCarDTO } from './dto'

@Controller('/cars')
export class CarCotroller {
   constructor(private readonly carService: CarService) {}

   @Get()
   getAllCars() {
      return this.carService.getAllCars()
   }

   //cars/search&name=Toyota&price=15000

   //    @Get('/search')
   //    getUserByQuery(@Query('name') name: string, @Query('price') price: number) {
   //       return this.carService.getCarByQuery(name, price)
   //    }

   @Post('/create')
   createCar(@Body() body: CreateCarDTO) {
      return this.carService.createCar(body)
   }

   //Через те що пошук url йде каскадом, то отакі параметри треба виносити в кінець. Бо якщо треба щоб запит зайшов по url search - то він ніколи до нього не прийде
   // cars/id -> cars/12
   @Get(':id')
   getCarById(@Param('id', ParseIntPipe) id: number) {
      return this.carService.getCarById(id)
   }
}
