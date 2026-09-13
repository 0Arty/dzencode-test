import { ProductCard } from '@entities/product'

import { useAppSelector } from '@shared/lib/'
import type { Product } from '@shared/types'
import { Loader } from '@shared/ui/Loader'

import { useProducts } from '../../lib/useProduct'

import './ProductsList.scss'

export const ProductsList = () => {
   const activeFilter = useAppSelector(state => state.product.activeFilter)
   const { data, isLoading, isError, error } = useProducts(activeFilter)

   if (isLoading) {
      return <Loader />
   }

   if (isError) {
      return <h2>Something went wrong: {error.message}</h2>
   }

   return (
      <div className="products-list">
         {!!data && data.items.map((product: Product) => <ProductCard key={product.id} data={product} />)}
      </div>
   )
}
