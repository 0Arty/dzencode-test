import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { productApi } from '../api/productApi'
import type { CreateProductDto, ProductsTypesFilter, UpdateProductDto } from '../model/types'

const QUERY_KEY = ['product']

export const useProducts = (type: ProductsTypesFilter) => {
   return useQuery({
      queryKey: [QUERY_KEY, type],
      queryFn: () => productApi.getAll(type),
   })
}

export const useProduct = (id: string) => {
   return useQuery({
      queryKey: [...QUERY_KEY, id],
      queryFn: () => productApi.getById(id),
      enabled: !!id,
   })
}

export const useProductsCount = (type: ProductsTypesFilter) => {
   return useQuery({
      queryKey: [...QUERY_KEY, 'count', type],
      queryFn: () => productApi.getProductsCount(type),
   })
}

export const useCreateProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: CreateProductDto) => productApi.create(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}

export const useUpdateProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: UpdateProductDto) => productApi.update(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}

export const useRemoveProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (id: number) => productApi.remove(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}
