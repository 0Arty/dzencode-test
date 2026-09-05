import { type Product } from '@shared/types'

import './ProductCard.scss'

interface Props {
   data: Product
}

export const ProductCard = ({ data }: Props) => {
   const { title, prices } = data

   return (
      <div className="product-card">
         <h3>{title}</h3>

         {!!prices &&
            prices &&
            prices.map(price => (
               <div key={`product-price--${price.id}`}>
                  <h3>{price.value}</h3>
                  <h3>{price.symbol}</h3>
               </div>
            ))}
      </div>
   )
}
