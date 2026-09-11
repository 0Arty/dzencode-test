import type { ReactNode } from 'react'

import './FormField.scss'

interface Props {
   label: string
   children: ReactNode
}

export const FormField = ({ label, children }: Props) => {
   return (
      <div className="input--label">
         <span className="label">{label}</span>
         {children}
      </div>
   )
}
