import type { Order } from '@shared/types'

import { useOrders } from '../../lib/useOrder'
import { OrderCard } from '../OrderCard'

import './OrdersList.scss'

export const OrdersList = () => {
   const { data, isLoading, isError } = useOrders()

   if (isLoading) {
      return <h2>Loading...</h2>
   }

   if (isError) {
      return <h2>Something went wrong</h2>
   }

   return (
      <div className="orders-list">
         {!!data &&
            data.items.map((order: Order) => (
               <div key={`order-${order.id}`}>
                  <OrderCard data={order} />
               </div>
            ))}
      </div>
   )
}
