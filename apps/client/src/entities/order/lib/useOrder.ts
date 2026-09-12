import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { ORDER_QUERY_KEY } from '../model/queryKeys'
import type { CreateOrderDto } from '../model/types'

import { orderApi } from './../api/orderApi'

export const useOrders = () => {
   return useQuery({
      queryKey: ORDER_QUERY_KEY,
      queryFn: orderApi.getAll,
   })
}

// export const useOrder = (id: string) => {
//    return useQuery({
//       queryKey: [...ORDER_QUERY_KEY, id],
//       queryFn: () => orderApi.getById(id),
//       enabled: !!id,
//    })
// }

export const useOrdersCount = () => {
   return useQuery({
      queryKey: [...ORDER_QUERY_KEY, 'count'],
      queryFn: orderApi.getOrdersCount,
   })
}

export const useCreateOrder = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: CreateOrderDto) => orderApi.create(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ORDER_QUERY_KEY }),
   })
}

export const useRemoveOrder = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (id: number) => orderApi.remove(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: ORDER_QUERY_KEY }),
   })
}
