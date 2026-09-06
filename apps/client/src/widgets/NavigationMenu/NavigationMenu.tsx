import { useRef } from 'react'

import { ROUTES } from '@app/routers/config/routes'
import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { closeModal } from '@entities/modal/model/modalSlice'
import { selectIsModalOpen } from '@entities/modal/model/selectors'
import { useGSAP } from '@gsap/react'
import Close from '@icons/close.svg?react'
import { useClickOutside, useMediaQueryChange } from '@shared/hooks'
import { gsap } from 'gsap'
import { NavLink } from 'react-router-dom'

import './NavigationMenu.scss'
gsap.registerPlugin(useGSAP)

export const NavigationMenu = () => {
   const asideRef = useRef<HTMLElement>(null)

   const isOpen = useAppSelector(selectIsModalOpen('navigationMenu'))
   const dispatch = useAppDispatch()

   const closeMenuHandler = () => {
      dispatch(closeModal('navigationMenu'))
   }

   useClickOutside(asideRef, closeMenuHandler, isOpen)

   useGSAP(() => {
      if (!asideRef.current) return
      const tl = gsap.timeline()

      tl.to(asideRef.current, {
         '--menu-clip': isOpen ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
         duration: 0.4,
         ease: isOpen ? 'power3.out' : 'power3.in',
      })

      if (isOpen) {
         tl.from('.nav-list--link', { opacity: 0, x: -20, duration: 0.3, stagger: 0.08 }, '-=0.15')
      }
   }, [isOpen])

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
