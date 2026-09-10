import { useEffect } from 'react'

import { ProductCard } from '@entities/product'
import type { Product } from '@shared/types'

import { useProducts } from '../../lib/useProduct'

import './ProductsList.scss'

export const ProductsList = () => {
   const { data, isLoading, isError } = useProducts()

   if (isLoading) {
      return <h2>Loading...</h2>
   }

   if (isError) {
      return <h2>Something went wrong</h2>
   }

   return (
      <div className="products-list">
         {!!data && data.items.map((product: Product) => <ProductCard key={product.id} data={product} />)}
      </div>
   )
}
