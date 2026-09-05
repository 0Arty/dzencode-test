export interface CreateProductDto {
   title: string
   description?: string
}

export interface UpdateProductDto extends Partial<CreateProductDto> {
   id: string
}
