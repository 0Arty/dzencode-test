import { useAppDispatch, useAppSelector } from '@shared/lib/'
import { closeModal, selectIsModalOpen } from '@entities/modal'
import { deleteProductCancelled, useRemoveProduct } from '@entities/product'
import { Modal } from '@shared/ui/Modal'
import { SolidButton } from '@shared/ui/SolidButton'
import { StrokedButton } from '@shared/ui/StrokedButton'

export const RemoveProductModal = () => {
   const dispatch = useAppDispatch()

   const isOpen = useAppSelector(selectIsModalOpen('deleteProduct'))

   const productID = useAppSelector(state => state.product.productID)
   const productName = useAppSelector(state => state.order.orderName)

   const closeModalHandler = () => {
      dispatch(closeModal('deleteProduct'))
      dispatch(deleteProductCancelled())
   }
   const { mutate: removeProduct, isPending, isError, error } = useRemoveProduct()
   const removeProductHandler = () => {
      if (productID) {
         removeProduct(productID, {
            onSuccess: closeModalHandler,
         })
      }
   }
   return (
      <>
         <Modal isOpen={isOpen} outsideClickCallBack={closeModalHandler}>
            <h4>Delete product: {productName}?</h4>

            <div className="approve-container mt-4">
               <StrokedButton className="w-100" onClick={closeModalHandler}>
                  Cancel
               </StrokedButton>
               <SolidButton className="w-100" onClick={removeProductHandler} disabled={isPending}>
                  Remove
               </SolidButton>
            </div>
         </Modal>
      </>
   )
}
