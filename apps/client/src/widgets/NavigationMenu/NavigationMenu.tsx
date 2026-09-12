import { closeModal } from '@entities/modal'
import { selectIsModalOpen } from '@entities/modal'
import Close from '@icons/close.svg?react'
import { ROUTES } from '@shared/config'
import { useClickOutside } from '@shared/hooks'
import { useAppDispatch, useAppSelector } from '@shared/lib/'
import { NavLink } from 'react-router-dom'

import { useAnimation } from './animation'

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
      <div className="navigation-menu--container">
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
      </div>
   )
}
