import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { BrandService } from './brand.service'
import { CreateBrandDTO } from './dto/brand.dto'

@Controller('/brand')
export class BrandController {
   constructor(private readonly brandService: BrandService) {}

   @Get()
   getAllBrands() {
      return this.brandService.getAllBrands()
   }

   @Post('/create')
   createBrand(@Body() body: CreateBrandDTO) {
      return this.brandService.createBrand(body)
   }

   @Get(':name')
   getOneBrand(@Param() id: number) {
      return this.brandService.getOne(id)
   }
}
