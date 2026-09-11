import { axiosInstance } from '@shared/api/axiosInstance'
import { type PaginatedResponse, type Product } from '@shared/types'

import type { CreateProductDto, UpdateProductDto } from '../model/types'

const BASE_URL = '/products'

export const productApi = {
   getAll: async (): Promise<PaginatedResponse<Product>> => {
      const { data } = await axiosInstance.get<PaginatedResponse<Product>>(BASE_URL)
      return data
   },
   getProductsCount: async () => {
      const { data } = await axiosInstance.get<number>(`${BASE_URL}/total`)
      return data
   },

   getById: async (id: string): Promise<PaginatedResponse<Product>> => {
      const { data } = await axiosInstance.get<PaginatedResponse<Product>>(`${BASE_URL}/${id}`)
      return data
   },

   create: async (dto: CreateProductDto): Promise<Product> => {
      const { data } = await axiosInstance.post<Product>(BASE_URL, dto)
      return data
   },

   update: async (dto: UpdateProductDto): Promise<PaginatedResponse<Product>> => {
      const { id, ...rest } = dto
      const { data } = await axiosInstance.put<PaginatedResponse<Product>>(`${BASE_URL}/${id}`, rest)
      return data
   },

   remove: async (id: number): Promise<void> => {
      await axiosInstance.delete(`${BASE_URL}/${id}`)
   },
}
