import { ROUTES } from '@app/routers/config/routes'
import { NavLink } from 'react-router-dom'

import './NavigationMenu.scss'

export const NavigationMenu = () => {
   //    const toggleMenu = () => setIsOpen(!isOpen)

   const closeMenuHandler = () => {}

   return (
      <>
         <aside className="navigation-menu shadow-lg">
            <nav className="nav-list">
               <NavLink to={ROUTES.ORDERS} className="nav-list--link " onClick={closeMenuHandler}>
                  Заказ
               </NavLink>
               <NavLink to={ROUTES.PRODUCTS} className="nav-list--link" onClick={closeMenuHandler}>
                  Продукты
               </NavLink>
            </nav>
         </aside>
      </>
   )
}
