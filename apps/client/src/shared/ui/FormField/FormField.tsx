import type { ReactNode } from 'react'
import type { FieldError } from 'react-hook-form'

import { ErrorMessage } from '@shared/ui/ErrorMessage'

import './FormField.scss'

interface Props {
   label: string
   children: ReactNode
   error?: FieldError | { message?: string }
}

export const FormField = ({ label, error, children }: Props) => {
   return (
      <div className="input--label">
         <span className="label">{label}</span>
         {children}
         <ErrorMessage error={error} />
      </div>
   )
}
