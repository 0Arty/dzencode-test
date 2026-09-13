import type { Product } from '@shared/types'

import { ProductInOrder } from '../ProductInOrder'

import './ProductsListInOrder.scss'

interface Props {
   productsList: Product[]
   onClick: (id: number) => void
}

export const ProductsListInOrder = ({ productsList, onClick }: Props) => {
   if (productsList.length === 0) {
      return (
         <div className="products-list--in-order">
            <h3>There are no products yet.</h3>
         </div>
      )
   }

   return (
      <div className="products-list--in-order">
         <h3>Products:</h3>
         <div className="list">
            {productsList.map((product: Product) => {
               return <ProductInOrder data={product} key={product.id} onClick={onClick} icon="delete" />
            })}
         </div>
      </div>
   )
}
