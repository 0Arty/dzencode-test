export interface Entity {
   id: string
   title: string
   description?: string
   createdAt: string
   updatedAt: string
}

export interface CreateEntityDto {
   title: string
   description?: string
}

export interface UpdateEntityDto extends Partial<CreateEntityDto> {
   id: string
}
