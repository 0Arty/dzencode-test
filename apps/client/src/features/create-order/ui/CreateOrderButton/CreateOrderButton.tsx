import { openModal } from '@entities/modal'

import { useAppDispatch } from '@shared/lib/'
import { SolidButton } from '@shared/ui/SolidButton'

export const CreateOrderButton = () => {
   const dispatch = useAppDispatch()
   const openModalHandler = () => {
      dispatch(openModal('createOrder'))
   }

   return <SolidButton onClick={openModalHandler}>Create order</SolidButton>
}
