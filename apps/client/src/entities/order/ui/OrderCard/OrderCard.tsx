import { useAppDispatch } from '@app/store/hooks'
import { openModal } from '@entities/modal'
import type { DeleteOrderRequest } from '@entities/order'
import { deleteOrderRequested } from '@entities/order'
import List from '@icons/list.svg?react'
import Trash from '@icons/trash.svg?react'
import { useFormattedString } from '@shared/hooks'
import type { Order } from '@shared/types'
import { CurencyBadge } from '@shared/ui/CurencyBadge'

import './OrderCard.scss'

interface Props {
   data: Order
}

export const OrderCard = ({ data }: Props) => {
   const { id, title, createdAt: isoString, productsCount, sums } = data

   const dispatch = useAppDispatch()
   const payload: DeleteOrderRequest = {
      orderID: id,
      orderName: title,
   }

   const openConfirmRemoveModal = () => {
      dispatch(openModal('deleteOrder'))
      dispatch(deleteOrderRequested(payload))
   }

   const { formatNumeric, formatString } = useFormattedString({ isoString })

   if (!data) {
      return null
   }

   return (
      <div className="order-card">
         <h4 className="order-card--name ">{title}</h4>

         <div className={'order-card--count'}>
            <button className="open-details-btn">
               <List />
            </button>

            <div className="order-card--col count-details">
               <h6 className="count-details--number mb-0">{productsCount}</h6>
               <h6 className="count-details--description mb-0 opacity-50">Products</h6>
            </div>
         </div>

         <div className="order-card--col order-card--created-at">
            <h6 className="mb-0">{formatNumeric}</h6>
            <h6 className="mb-0">{formatString}</h6>
         </div>

         <div className="order-card--col order-card--price">
            {Object.entries(sums).map(([currency, amount]) => (
               <CurencyBadge currency={currency} amount={amount} key={`order-${data.id}-curency-${currency} `} />
            ))}
         </div>

         <button className="order-card--remove" onClick={openConfirmRemoveModal}>
            <Trash />
         </button>
      </div>
   )
}
