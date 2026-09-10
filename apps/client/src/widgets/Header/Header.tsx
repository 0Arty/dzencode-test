import { useEffect, useRef } from 'react'

import { useAppDispatch } from '@app/store/hooks'
import { openModal } from '@entities/modal'
import Menu from '@icons/menu.svg?react'

import './Header.scss'

export const Header = () => {
   const headerRef = useRef<HTMLElement>(null)
   const dispatch = useAppDispatch()

   const openModalHandler = () => {
      dispatch(openModal('navigationMenu'))
   }

   useEffect(() => {
      const header = headerRef.current

      if (!header) return

      const updateHeaderHeight = () => {
         const height = header.getBoundingClientRect().height

         document.documentElement.style.setProperty('--header-height', `${height}px`)
      }

      updateHeaderHeight()

      const observer = new ResizeObserver(updateHeaderHeight)

      observer.observe(header)

      return () => {
         observer.disconnect()
      }
   }, [])

   return (
      <header className="header shadow-lg" ref={headerRef}>
         <button className="header--modal-handler" onClick={openModalHandler}>
            <Menu />
         </button>
      </header>
   )
}
