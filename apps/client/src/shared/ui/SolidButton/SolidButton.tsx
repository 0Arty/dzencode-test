import { type ButtonHTMLAttributes } from 'react'

import './SolidButton.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string
}

export const SolidButton = ({ children, className, ...rest }: Props) => {
   return (
      <button className={`solid-btn ${className}`} {...rest}>
         {children}
      </button>
   )
}
