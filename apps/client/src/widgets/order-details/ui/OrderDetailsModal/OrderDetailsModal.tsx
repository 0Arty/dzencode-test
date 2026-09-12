import { closeModal, selectIsModalOpen } from '@entities/modal'
import { ProductInOrder } from '@entities/product'
import { useRemoveProductFromOrder } from '@entities/product/'
import { AddToOrder } from '@features/add-product-to-order'
import { useAppDispatch, useAppSelector } from '@shared/lib/'
import type { Product } from '@shared/types'
import { Modal } from '@shared/ui/Modal'
import { ModalTitle } from '@shared/ui/ModalTitle'

export const OrderDetailsModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('orderDetails'))
   const orderDetails = useAppSelector(state => state.order.orderDetails)

   const dispatch = useAppDispatch()
   const closeModalHandler = () => {
      dispatch(closeModal('orderDetails'))
   }

   const { mutate: removeProduct, isPending, isError } = useRemoveProductFromOrder()

   const removeOrderHandler = (id: number) => {
      removeProduct({ productID: id, orderID: orderDetails?.id })
   }

   return (
      <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
         <ModalTitle title={`Order name: ${orderDetails?.title} `} btnHandleFunc={closeModalHandler} />

         <AddToOrder />

         {orderDetails?.products?.map((product: Product) => {
            return <ProductInOrder data={product} key={product.id} onRemove={removeOrderHandler} />
         })}
      </Modal>
   )
}
