import { type ButtonHTMLAttributes } from 'react'

import './StrokedButton.scss'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string
}

export const StrokedButton = ({ children, className, ...rest }: Props) => {
   return (
      <button className={`stroked-btn ${className}`} {...rest}>
         {children}
      </button>
   )
}
