import { closeModal } from '@entities/modal'
import { selectIsModalOpen } from '@entities/modal'
import { deleteOrderCancelled, useRemoveOrder } from '@entities/order'
import { useAppDispatch, useAppSelector } from '@shared/lib/'
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

   const { mutate: removeOrder, isPending, isError, error } = useRemoveOrder()

   const removeOrderHandler = () => {
      if (orderId) {
         removeOrder(orderId, {
            onSuccess: closeModalHandler,
         })
      }
   }

   return (
      <>
         <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
            <h4>Delete order: {orderName}?</h4>

            <div className="approve-container mt-4">
               <StrokedButton className="w-100" onClick={closeModalHandler}>
                  Cancel
               </StrokedButton>
               <SolidButton className="w-100" onClick={removeOrderHandler} disabled={isPending}>
                  Remove
               </SolidButton>
            </div>
         </Modal>
      </>
   )
}
