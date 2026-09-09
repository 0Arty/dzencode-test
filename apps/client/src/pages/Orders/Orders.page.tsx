import { useOrdersCount } from '@entities/order'
import { OrdersList } from '@entities/order/ui/OrdersList/OrdersList'
import { Title } from '@shared/ui/Title'

export const OrdersPage = () => {
   const { data: count } = useOrdersCount()

   return (
      <div className="d-flex flex-column gap-4">
         <Title title={'Orders'} count={count ?? 0} />

         <OrdersList />
      </div>
   )
}
