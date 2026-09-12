import { closeModal, selectIsModalOpen } from '@entities/modal'
import { useOrder } from '@entities/order'
import { ProductInOrder } from '@entities/product'
import { useRemoveProductFromOrder } from '@entities/product/'
import { AddToOrder } from '@features/add-product-to-order'
import { useAppDispatch, useAppSelector } from '@shared/lib/'
import type { Product } from '@shared/types'
import { Modal } from '@shared/ui/Modal'
import { ModalTitle } from '@shared/ui/ModalTitle'
import { useEffect } from 'react'

export const OrderDetailsModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('orderDetails'))
   const orderID = useAppSelector(state => state.order.orderID)

   const dispatch = useAppDispatch()
   const closeModalHandler = () => {
      dispatch(closeModal('orderDetails'))
   }

   const { data: order } = useOrder(orderID)
   const { mutate: removeProduct } = useRemoveProductFromOrder()

   useEffect(() => {
      console.log(order)
   }, [order])

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

         {order.products?.map((product: Product) => {
            return <ProductInOrder data={product} key={product.id} onClick={removeOrderHandler} icon="delete" />
         })}
      </Modal>
   )
}
