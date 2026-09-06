import { ROUTES } from '@app/routers/config/routes'
import Close from '@icons/close.svg?react'
import { NavLink } from 'react-router-dom'

import './NavigationMenu.scss'

export const NavigationMenu = () => {
   //    const toggleMenu = () => setIsOpen(!isOpen)

   const closeMenuHandler = () => {}

   return (
      <>
         <aside className="navigation-menu shadow-lg">
            <button onClick={closeMenuHandler} className="navigation-menu--close">
               <Close />
            </button>

            <nav className="nav-list">
               <NavLink to={ROUTES.ORDERS} className="nav-list--link " onClick={closeMenuHandler}>
                  Orders
               </NavLink>
               <NavLink to={ROUTES.PRODUCTS} className="nav-list--link" onClick={closeMenuHandler}>
                  Prodcuts
               </NavLink>
            </nav>
         </aside>
      </>
   )
}
