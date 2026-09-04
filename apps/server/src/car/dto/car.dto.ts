import {
   IsNotEmpty,
   IsNumber,
   IsString,
   MaxLength,
   MinLength,
   Min,
} from 'class-validator'

export class CreateCarDTO {
   @IsString()
   @IsNotEmpty({ message: 'Name is required!' })
   model: string

   @IsString()
   @IsNotEmpty()
   color: string

   @IsNumber()
   @IsNotEmpty()
   year: number

   @IsNotEmpty({ message: 'Price is required!' })
   @IsNumber()
   @Min(200, { message: 'Price is so small' })
   price: number

   @IsNumber()
   @IsNotEmpty({ message: 'Brand is required!' })
   brand: number
}
