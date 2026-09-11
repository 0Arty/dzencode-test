import { FormField } from '@shared/ui/FormField'
import type { InputHTMLAttributes } from 'react'

import './Input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label: string
}

export const Input = ({ label, ...props }: Props) => {
   const title = label
   return (
      <FormField label={title}>
         <input {...props} className="input" />
      </FormField>
   )
}
