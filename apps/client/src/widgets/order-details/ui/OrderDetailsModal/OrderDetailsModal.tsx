import { AddToOrder } from '@features/add-product-to-order'

import { closeModal, selectIsModalOpen } from '@entities/modal'
import { useOrder } from '@entities/order'
import { closeProductsDropdown } from '@entities/order/model/orderSlice'
import { ProductsListInOrder } from '@entities/product'
import { useRemoveProductFromOrder } from '@entities/product/'

import { useAppDispatch, useAppSelector } from '@shared/lib/'
import { Modal } from '@shared/ui/Modal'
import { ModalTitle } from '@shared/ui/ModalTitle'

export const OrderDetailsModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('orderDetails'))
   const orderID = useAppSelector(state => state.order.orderID)

   const dispatch = useAppDispatch()
   const closeModalHandler = () => {
      dispatch(closeProductsDropdown())
      dispatch(closeModal('orderDetails'))
   }

   const { data: order } = useOrder(orderID)
   const { mutate: removeProduct } = useRemoveProductFromOrder()

   if (!orderID) {
      return null
   }

   if (!order) {
      return null
   }

   const removeOrderHandler = (productId: number) => {
      removeProduct({
         productID: productId,
         orderID: orderID,
      })
   }

   return (
      <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
         <ModalTitle title={`Order name: ${order.title} `} btnHandleFunc={closeModalHandler} />

         <AddToOrder orderID={orderID} />
         <ProductsListInOrder productsList={order?.products || []} onClick={removeOrderHandler} />
      </Modal>
   )
}
