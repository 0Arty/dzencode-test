import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal'
import { selectIsModalOpen } from '@entities/modal'
import { deleteOrderCancelled } from '@entities/order'
import { Modal } from '@shared/ui/Modal'
import { SolidButton } from '@shared/ui/SolidButton'
import { StrokedButton } from '@shared/ui/StrokedButton'

import './RemoveOrderModal.scss'

export const RemoveOrderModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('deleteOrder'))

   const orderId = useAppSelector(state => state.order.orderID)
   const orderName = useAppSelector(state => state.order.orderName)

   const dispatch = useAppDispatch()

   const closeModalHandler = () => {
      dispatch(closeModal('deleteOrder'))
      dispatch(deleteOrderCancelled())
   }
   const removeOrderHandler = () => {}

   return (
      <>
         <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
            <h4>Delete order: {orderName}?</h4>

            {/* <StrokedButton>Cancel</StrokedButton> */}
            <SolidButton className="" onClick={removeOrderHandler}>
               Remove
            </SolidButton>
         </Modal>
      </>
   )
}
