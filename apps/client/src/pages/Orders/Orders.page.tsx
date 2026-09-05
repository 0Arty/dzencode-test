import { OrdersList } from '@entities/order/ui/OrdersList/OrdersList'
import { Title } from '@shared/ui/Title'

export const OrdersPage = () => {
   return (
      <>
         <Title title={'Orders'} count={0} />

         <OrdersList />
      </>
   )
}
