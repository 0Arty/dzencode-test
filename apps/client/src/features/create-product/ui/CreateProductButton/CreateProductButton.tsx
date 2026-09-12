import { useAppDispatch } from '@shared/lib/'
import { openModal } from '@entities/modal'
import { SolidButton } from '@shared/ui/SolidButton'

export const CreateProductButton = () => {
   const dispatch = useAppDispatch()
   const openModalHandler = () => {
      dispatch(openModal('createProduct'))
   }

   return <SolidButton onClick={openModalHandler}>Create product</SolidButton>
}
