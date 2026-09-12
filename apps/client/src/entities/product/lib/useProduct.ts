import { ORDER_QUERY_KEY } from '@entities/order'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { productApi } from '../api/productApi'
import { PRODUCT_QUERY_KEY } from '../model/queryKeys'
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

export const useProductsCount = (type: ProductsTypesFilter) => {
   return useQuery({
      queryKey: [...PRODUCT_QUERY_KEY, 'count', type],
      queryFn: () => productApi.getProductsCount(type),
   })
}

export const useCreateProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (dto: CreateProductDto) => productApi.create(dto),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEY }),
   })
}

export const useAddProductToOrder = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: ({ productID, orderID }: AttachProductToOrder) => productApi.attachToOrder({ productID, orderID }),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: PRODUCT_QUERY_KEY }),
   })
}

export const useRemoveProductFromOrder = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: ({ productID, orderID }: DetachProductFromOrder) =>
         productApi.detachFromOrder({ productID, orderID }),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [PRODUCT_QUERY_KEY, ORDER_QUERY_KEY] }),
   })
}

export const useRemoveProduct = () => {
   const queryClient = useQueryClient()
   return useMutation({
      mutationFn: (id: number) => productApi.remove(id),
      onSuccess: () => queryClient.invalidateQueries({ queryKey: [PRODUCT_QUERY_KEY, ORDER_QUERY_KEY] }),
   })
}

// export const useProduct = (id: string) => {
//    return useQuery({
//       queryKey: [...QUERY_KEY, id],
//       queryFn: () => productApi.getById(id),
//       enabled: !!id,
//    })
// }

// export const useUpdateProduct = () => {
//    const queryClient = useQueryClient()
//    return useMutation({
//       mutationFn: (dto: UpdateProductDto) => productApi.update(dto),
//       onSuccess: () => queryClient.invalidateQueries({ queryKey: QUERY_KEY }),
//    })
// }
