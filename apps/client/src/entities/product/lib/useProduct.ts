import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { ORDER_DETAIL_QUERY_KEY, ORDER_QUERY_KEY } from '@entities/order'

import { productApi } from '../api/productApi'
import { PRODUCT_QUERY_KEY } from '../model/queryKeys'
import { PRODUCT_WITHOUT_ORDER_QUERY_KEY } from '../model/queryKeys'
import type {
   AttachProductToOrder,
   CreateProductDto,
   DetachProductFromOrder,
   ProductsTypesFilter,
} from '../model/types'

export const useProducts = (type: ProductsTypesFilter) => {
   return useQuery({
      queryKey: [PRODUCT_QUERY_KEY, type],
      queryFn: () => productApi.getAll(type),
   })
}

export const useProductsWithOurOrder = (enabled: boolean) => {
   return useQuery({
      queryKey: PRODUCT_WITHOUT_ORDER_QUERY_KEY,
      queryFn: () => productApi.getAllWithoutOrder(),
      enabled,
   })
}

export const useProductsCount = (type: ProductsTypesFilter) => {
   return useQuery({
      queryKey: [PRODUCT_QUERY_KEY, 'count', type],
      queryFn: () => productApi.getProductsCount(type),
   })
}

export const useCreateProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: CreateProductDto) => productApi.create(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [PRODUCT_QUERY_KEY] }),
   })
}

export const useAddProductToOrder = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: ({ orderID, productID }: AttachProductToOrder) => productApi.attachToOrder({ productID, orderID }),

      onSuccess: async (_, variables) => {
         await Promise.all([
            queryClient.invalidateQueries({ queryKey: ORDER_DETAIL_QUERY_KEY(variables.orderID) }),
            queryClient.invalidateQueries({ queryKey: PRODUCT_WITHOUT_ORDER_QUERY_KEY }),
            queryClient.invalidateQueries({ queryKey: [ORDER_QUERY_KEY] }),
         ])
      },
   })
}

export const useRemoveProductFromOrder = () => {
   const queryClient = useQueryClient()

   return useMutation({
      mutationFn: ({ productID }: DetachProductFromOrder) => productApi.detachFromOrder(productID),

      onSuccess: async (_, variables) => {
         await Promise.all([
            queryClient.invalidateQueries({ queryKey: ORDER_DETAIL_QUERY_KEY(variables.orderID) }),
            queryClient.invalidateQueries({ queryKey: PRODUCT_WITHOUT_ORDER_QUERY_KEY }),
            queryClient.invalidateQueries({ queryKey: [ORDER_QUERY_KEY] }),
         ])
      },
   })
}

export const useRemoveProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (id: number) => productApi.remove(id),
      onSuccess: async (_, id) => {
         queryClient.removeQueries({ queryKey: ORDER_DETAIL_QUERY_KEY(id) })
         await Promise.all([queryClient.invalidateQueries({ queryKey: [PRODUCT_QUERY_KEY] })])
      },
   })
}
