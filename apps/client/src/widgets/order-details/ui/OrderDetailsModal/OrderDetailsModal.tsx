import { closeModal, selectIsModalOpen } from '@entities/modal'
import { useOrder } from '@entities/order'
import { closeProductsDropdown } from '@entities/order/model/orderSlice'

import { useAppDispatch, useAppSelector } from '@shared/lib/'
import { Modal } from '@shared/ui/Modal'

import { OrderDetailsContent } from '../OrderDetailsContent'

export const OrderDetailsModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('orderDetails'))
   const orderID = useAppSelector(state => state.order.orderID)

   const dispatch = useAppDispatch()
   const closeModalHandler = () => {
      dispatch(closeProductsDropdown())
      dispatch(closeModal('orderDetails'))
   }

   const { data: order } = useOrder(orderID)

   if (!orderID || !order) {
      return null
   }

   return (
      <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
         <OrderDetailsContent order={order} closeModal={closeModalHandler} />
      </Modal>
   )
}
