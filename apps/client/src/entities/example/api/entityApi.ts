import { axiosInstance } from '@shared/api/axiosInstance'

import type { CreateEntityDto, Entity, UpdateEntityDto } from '../index'

const BASE_URL = '/todos'

export const entityApi = {
   getAll: async (): Promise<Entity[]> => {
      const { data } = await axiosInstance.get<Entity[]>(BASE_URL)

      return data
   },

   getById: async (id: string): Promise<Entity> => {
      const { data } = await axiosInstance.get<Entity>(`${BASE_URL}/${id}`)
      return data
   },

   create: async (dto: CreateEntityDto): Promise<Entity> => {
      const { data } = await axiosInstance.post<Entity>(BASE_URL, dto)
      return data
   },

   update: async (dto: UpdateEntityDto): Promise<Entity> => {
      const { id, ...rest } = dto
      const { data } = await axiosInstance.put<Entity>(`${BASE_URL}/${id}`, rest)
      return data
   },

   remove: async (id: string): Promise<void> => {
      await axiosInstance.delete(`${BASE_URL}/${id}`)
   },
}
