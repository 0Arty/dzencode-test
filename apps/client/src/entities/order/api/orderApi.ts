import { axiosInstance } from '@shared/api/axiosInstance'
import { type Order, type PaginatedResponse } from '@shared/types'

import type { CreateOrderDto } from '../model/types'

const BASE_URL = '/orders'

export const orderApi = {
   getAll: async (): Promise<PaginatedResponse<Order>> => {
      const { data } = await axiosInstance.get<PaginatedResponse<Order>>(BASE_URL)
      return data
   },

   getById: async (id: string): Promise<PaginatedResponse<Order>> => {
      const { data } = await axiosInstance.get<PaginatedResponse<Order>>(`${BASE_URL}/${id}`)
      return data
   },

   getOrdersCount: async () => {
      const { data } = await axiosInstance.get<number>(`${BASE_URL}/total`)
      return data
   },

   create: async (dto: CreateOrderDto): Promise<PaginatedResponse<Order>> => {
      const { data } = await axiosInstance.post<PaginatedResponse<Order>>(BASE_URL, dto)
      return data
   },

   remove: async (id: string): Promise<void> => {
      await axiosInstance.delete(`${BASE_URL}/${id}`)
   },
}
