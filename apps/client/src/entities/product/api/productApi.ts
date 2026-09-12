import { axiosInstance } from '@shared/api/axiosInstance'
import { type PaginatedResponse, type Product } from '@shared/types'

import type {
   AttachProductToOrder,
   CreateProductDto,
   DetachProductFromOrder,
   ProductsTypesFilter,
   UpdateProductDto,
} from '../model/types'

const BASE_URL = '/products'

export const productApi = {
   getAll: async (type: ProductsTypesFilter): Promise<PaginatedResponse<Product>> => {
      const { data } = await axiosInstance.get<PaginatedResponse<Product>>(`${BASE_URL}`, {
         params: {
            type: type ?? undefined,
         },
      })

      return data
   },
   getProductsCount: async (type: ProductsTypesFilter) => {
      const { data } = await axiosInstance.get<number>(`${BASE_URL}/total`, {
         params: {
            type: type ?? undefined,
         },
      })
      return data
   },

   //    getById: async (id: string): Promise<PaginatedResponse<Product>> => {
   //       const { data } = await axiosInstance.get<PaginatedResponse<Product>>(`${BASE_URL}/${id}`)
   //       return data
   //    },

   create: async (dto: CreateProductDto): Promise<Product> => {
      const { data } = await axiosInstance.post<Product>(BASE_URL, dto)
      return data
   },

   attachToOrder: async ({ productID, orderID }: AttachProductToOrder): Promise<Product> => {
      const { data } = await axiosInstance.patch<Product>(`${BASE_URL}/${productID}/attach-order/${orderID}`)
      return data
   },

   detachFromOrder: async ({ productID, orderID }: DetachProductFromOrder): Promise<Product> => {
      const { data } = await axiosInstance.patch<Product>(`${BASE_URL}/${productID}/detach-order/${orderID}`)
      return data
   },

   //    update: async (dto: UpdateProductDto): Promise<PaginatedResponse<Product>> => {
   //       const { id, ...rest } = dto
   //       const { data } = await axiosInstance.put<PaginatedResponse<Product>>(`${BASE_URL}/${id}`, rest)
   //       return data
   //    },

   remove: async (id: number): Promise<void> => {
      await axiosInstance.delete(`${BASE_URL}/${id}`)
   },
}
