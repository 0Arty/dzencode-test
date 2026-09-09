import { ROUTES } from '@app/routers/config/routes'
import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal/model/modalSlice'
import { selectIsModalOpen } from '@entities/modal/model/selectors'
import Close from '@icons/close.svg?react'
import { useClickOutside } from '@shared/hooks'
import { useAnimation } from '@widgets/NavigationMenu/animation'
import { NavLink } from 'react-router-dom'

import './NavigationMenu.scss'

export const NavigationMenu = () => {
   const isOpen = useAppSelector(selectIsModalOpen('navigationMenu'))
   const dispatch = useAppDispatch()

   const closeMenuHandler = () => {
      dispatch(closeModal('navigationMenu'))
   }

   const asideRef = useAnimation(isOpen)
   useClickOutside(asideRef, closeMenuHandler, isOpen)

   return (
      <>
         <aside className="navigation-menu shadow-lg" ref={asideRef}>
            <button onClick={closeMenuHandler} className="navigation-menu--close">
               <Close />
            </button>

            <nav className="nav-list">
               <NavLink to={ROUTES.ORDERS} className="nav-list--link " onClick={closeMenuHandler}>
                  Orders
               </NavLink>
               <NavLink to={ROUTES.PRODUCTS} className="nav-list--link" onClick={closeMenuHandler}>
                  Products
               </NavLink>
            </nav>
         </aside>
      </>
   )
}
