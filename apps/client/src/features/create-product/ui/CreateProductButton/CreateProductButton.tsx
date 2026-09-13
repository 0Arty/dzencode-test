import { openModal } from '@entities/modal'

import { useAppDispatch } from '@shared/lib/'
import { SolidButton } from '@shared/ui/SolidButton'

export const CreateProductButton = () => {
   const dispatch = useAppDispatch()
   const openModalHandler = () => {
      dispatch(openModal('createProduct'))
   }

   return <SolidButton onClick={openModalHandler}>Create product</SolidButton>
}
