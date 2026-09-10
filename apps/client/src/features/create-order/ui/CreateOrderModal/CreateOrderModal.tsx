import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal'
import { selectIsModalOpen } from '@entities/modal'
import { CreateOrderForm } from '@features/create-order/'
import { Modal } from '@shared/ui/Modal'
import { ModalTitle } from '@shared/ui/ModalTitle'

import './CreateOrderModal.scss'

export const CreateOrderModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('createOrder'))

   const dispatch = useAppDispatch()

   const closeModalHandler = () => {
      dispatch(closeModal('createOrder'))
   }

   return (
      <>
         <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
            <ModalTitle title="Create order" btnHandleFunc={closeModalHandler} />

            <CreateOrderForm />
         </Modal>
      </>
   )
}
