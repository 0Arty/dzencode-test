import { AddToOrder } from '@features/add-product-to-order'

import { ProductsListInOrder } from '@entities/product'
import { useRemoveProductFromOrder } from '@entities/product/'

import { useFormattedString } from '@shared/hooks'
import type { Order } from '@shared/types'
import { CurencyBadge } from '@shared/ui/CurencyBadge'
import { ModalTitle } from '@shared/ui/ModalTitle'

import './OrderDetailsContent.scss'

interface Props {
   order: Order
   closeModal: () => void
}

export const OrderDetailsContent = ({ order, closeModal }: Props) => {
   const { id, productsCount, sums } = order
   const { fullFormatNumeric } = useFormattedString({ isoString: order.createdAt })
   const { mutate: removeProduct } = useRemoveProductFromOrder()

   const removeOrderHandler = (productId: number) => {
      removeProduct({
         productID: productId,
         orderID: id,
      })
   }

   return (
      <div className="order-details">
         <ModalTitle title={`Order name: ${order.title} `} btnHandleFunc={closeModal} />

         <div className="order-details--data-creating">
            <h4>Order created at:</h4>
            <h5 className="mb-0">{fullFormatNumeric}</h5>
         </div>

         <div className="order-details--sums">
            <h4>Order sum: </h4>

            {Object.entries(sums).map(([currency, amount]) => (
               <CurencyBadge currency={currency} amount={amount} key={`order-${id}-curency-${currency} `} />
            ))}
         </div>
         <div className="order-details--products-count">
            <h4>Products count: {productsCount}</h4>
            <AddToOrder orderID={id} />
         </div>

         <div className="order-details--products-list">
            <ProductsListInOrder productsList={order?.products || []} onClick={removeOrderHandler} />
         </div>
      </div>
   )
}
