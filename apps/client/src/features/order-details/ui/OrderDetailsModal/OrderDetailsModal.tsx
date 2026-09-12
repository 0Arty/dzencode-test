import { closeModal, selectIsModalOpen } from '@entities/modal'
import { useAppDispatch, useAppSelector } from '@shared/lib/'
import { Modal } from '@shared/ui/Modal'
import { ModalTitle } from '@shared/ui/ModalTitle'

export const OrderDetailsModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('orderDetails'))
   const orderDetails = useAppSelector(state => state.order.orderDetails)

   const dispatch = useAppDispatch()
   const closeModalHandler = () => {
      dispatch(closeModal('orderDetails'))
   }

   if (!orderDetails) {
      return null
   }

   const { title, products } = orderDetails

   return (
      <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
         <ModalTitle title={`Order name: ${title} `} btnHandleFunc={closeModalHandler} />
      </Modal>
   )
}
