import type { ReactNode } from 'react'

import { useAnimation } from './animation'

import './Dropdown.scss'

interface Props {
   isOpen: boolean
   children: ReactNode
}

export const Dropdown = ({ isOpen, children }: Props) => {
   const { dropdownRef } = useAnimation(isOpen)

   return (
      <div className="dropdown" ref={dropdownRef}>
         {children}
      </div>
   )
}
