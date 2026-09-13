import type { SelectHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

import type { SelectOptions } from '@shared/types'
import { FormField } from '@shared/ui/FormField'

import './Select.scss'
interface Props extends SelectHTMLAttributes<HTMLElement> {
   label: string
   error?: FieldError | { message?: string }
   options: SelectOptions[]
}

export const Select = ({ label, error, options, ...props }: Props) => {
   return (
      <FormField label={label} error={error}>
         <select {...props} className="select">
            {options?.map(option => {
               return (
                  <option key={option.value} value={option.value} className="select--option">
                     {option.title}
                  </option>
               )
            })}
         </select>
      </FormField>
   )
}
