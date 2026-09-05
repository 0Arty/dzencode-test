import List from '@icons/list.svg?react'
import type { Order } from '@shared/types'
import { FormattedDate } from '@shared/ui/FormattedDate/FormattedDate'

import './OrderCard.scss'

interface Props {
   data: Order
}

export const OrderCard = ({ data }: Props) => {
   const { title, createdAt, productsCount, sums } = data

   if (!data) {
      return null
   }

   return (
      <div className="order-card">
         <h6 className="order-card--name ">{title}</h6>

         <div className={'order-card--count'}>
            <button className="open-details-btn">
               <List />
            </button>

            <div className="count-details">
               <h5 className="count-details--number mb-0">{productsCount}</h5>
               <h6 className="count-details--description mb-0 opacity-50">Products</h6>
            </div>
         </div>
         <div className="order-card--created-at">
            <FormattedDate isoString={createdAt} />
         </div>
         <div className="order-card--price">
            {Object.entries(sums).map(([currency, amount]) => (
               <span key={currency} className="order-card--sum">
                  {amount} {currency}
               </span>
            ))}
         </div>
         <button className="order-card--remove">x</button>
      </div>
   )
}
