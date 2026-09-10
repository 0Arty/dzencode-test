import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal'
import { selectIsModalOpen } from '@entities/modal'
import { CreateProductForm } from '@features/create-product/ui/CreateProductForm'
import { Modal } from '@shared/ui/Modal'
import { ModalTitle } from '@shared/ui/ModalTitle'

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
            <ModalTitle title="Create product" btnHandleFunc={closeModalHandler} />

            <CreateProductForm />
         </Modal>
      </>
   )
}
