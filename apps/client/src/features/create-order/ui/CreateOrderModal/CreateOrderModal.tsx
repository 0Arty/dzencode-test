import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal/model/modalSlice'
import { selectIsModalOpen } from '@entities/modal/model/selectors'
import { Modal } from '@shared/ui/Modal'

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
            <h4>Create order</h4>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam nisi quo nam officiis dolores ut,
               asperiores voluptatum quis odit aperiam soluta facilis sit illum ducimus fuga mollitia modi laboriosam?
            </p>
         </Modal>
      </>
   )
}
