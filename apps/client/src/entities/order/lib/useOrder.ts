import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import type { CreateOrderDto } from '../model/types'

import { orderApi } from './../api/orderApi'

const QUERY_KEY = ['orders']

export const useOrders = () => {
   return useQuery({
      queryKey: QUERY_KEY,
      queryFn: orderApi.getAll,
   })
}

export const useOrder = (id: string) => {
   return useQuery({
      queryKey: [...QUERY_KEY, id],
      queryFn: () => orderApi.getById(id),
      enabled: !!id,
   })
}

export const useOrdersCount = () => {
   return useQuery({
      queryKey: [...QUERY_KEY, 'count'],
      queryFn: orderApi.getOrdersCount,
   })
}

export const useCreateOrder = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: CreateOrderDto) => orderApi.create(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}

export const useRemoveOrder = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (id: number) => orderApi.remove(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
   })
}
