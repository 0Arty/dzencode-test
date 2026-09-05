import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { productApi } from '../api/productApi'
import type { CreateProductDto, UpdateProductDto } from '../model/types'

const QUERY_KEY = ['product']

export const useProducts = () => {
   return useQuery({
      queryKey: QUERY_KEY,
      queryFn: productApi.getAll,
   })
}

export const useProduct = (id: string) => {
   return useQuery({
      queryKey: [...QUERY_KEY, id],
      queryFn: () => productApi.getById(id),
      enabled: !!id,
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
      mutationFn: (id: string) => productApi.remove(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}
