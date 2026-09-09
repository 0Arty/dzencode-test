import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal/model/modalSlice'
import { selectIsModalOpen } from '@entities/modal/model/selectors'
import { Modal } from '@shared/ui/Modal'

import './CreateProductModal.scss'

export const CreateProductModal = () => {
   const isOpen = useAppSelector(selectIsModalOpen('createProduct'))

   const dispatch = useAppDispatch()

   const closeModalHandler = () => {
      dispatch(closeModal('createProduct'))
   }

   return (
      <>
         <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
            <h4>Create Product</h4>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse aliquam nisi quo nam officiis dolores ut,
               asperiores voluptatum quis odit aperiam soluta facilis sit illum ducimus fuga mollitia modi laboriosam?
            </p>
         </Modal>
      </>
   )
}
