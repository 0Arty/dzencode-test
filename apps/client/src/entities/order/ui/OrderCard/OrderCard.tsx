import type { Order } from '@shared/types'

import './OrderCard.scss'

interface Props {
   data: Order
}

export const OrderCard = ({ data }: Props) => {
   const { title } = data

   if (!data) {
      return null
   }

   return (
      <div className="order-card">
         <h5>{title}</h5>
         <h4>{}</h4>
      </div>
   )
}
