import { useRef } from 'react'

import { ActiveTabsCounter } from '@features/ative-tabs'
import { CurrentTime } from '@features/current-time/index,.'

import { openModal } from '@entities/modal'

import { useElementHeight } from '@shared/hooks'
import { useAppDispatch } from '@shared/lib/'

import Menu from '@icons/menu.svg?react'

import './Header.scss'
export const Header = () => {
   const headerRef = useRef<HTMLElement>(null)
   const dispatch = useAppDispatch()

   const openModalHandler = () => {
      dispatch(openModal('navigationMenu'))
   }

   useElementHeight(headerRef, '--header-height')

   return (
      <header className="header shadow-lg" ref={headerRef}>
         <button className="header--modal-handler" onClick={openModalHandler}>
            <Menu />
         </button>

         <div className="header--widgets">
            <ActiveTabsCounter />
            <CurrentTime />
         </div>
      </header>
   )
}
