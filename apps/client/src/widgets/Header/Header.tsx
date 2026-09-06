import { useAppDispatch } from '@app/store/hooks'
import { openModal } from '@entities/modal/model/modalSlice'
import Menu from '@icons/menu.svg?react'

import './Header.scss'

export const Header = () => {
   const dispatch = useAppDispatch()

   const openModalHandler = () => {
      dispatch(openModal('navigationMenu'))
   }

   return (
      <header className="header containe-fluid px-2 py-2">
         <button className="header--modal-handler" onClick={openModalHandler}>
            <Menu />
         </button>
      </header>
   )
}
