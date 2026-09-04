import { IsNotEmpty, IsString } from 'class-validator'

export class CreateBrandDTO {
   @IsString({ message: 'brand name must be string' })
   @IsNotEmpty({ message: 'brand name is required' })
   name: string
}
