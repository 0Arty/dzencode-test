import { useAppDispatch } from '@app/store/hooks'
import { openModal } from '@entities/modal/model/modalSlice'
import { SolidButton } from '@shared/ui/SolidButton'

export const CreateOrderButton = () => {
   const dispatch = useAppDispatch()
   const openModalHandler = () => {
      dispatch(openModal('createOrder'))
   }

   return <SolidButton onClick={openModalHandler}>Create order</SolidButton>
}
