import Close from '@icons/close.svg?react'
import { useClickOutside } from '@shared/hooks'
import type { ReactNode } from 'react'

import { useAnimation } from './animation'

import './Modal.scss'

interface Props {
   children: ReactNode
   isOpen: boolean
   outsideClickCallBack: () => void
}

export const Modal = ({ children, isOpen, outsideClickCallBack }: Props) => {
   const { containerRef, contentRef } = useAnimation({ isOpen })
   useClickOutside(contentRef, outsideClickCallBack)

   return (
      <div className="modal-container" ref={containerRef}>
         <div className="modal-content" ref={contentRef}>
            {children}
         </div>
      </div>
   )
}
