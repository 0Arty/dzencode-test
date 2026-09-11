import { FormField } from '@shared/ui/FormField'
import type { ChangeEvent, InputHTMLAttributes } from 'react'

import './Input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label: string
}

export const InputNumber = ({ label, onChange, ...props }: Props) => {
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.target.value = event.target.value.replace(/\D/g, '')
      onChange?.(event)
   }

   return (
      <FormField label={label}>
         <input {...props} className="input" onChange={handleChange} />
      </FormField>
   )
}
