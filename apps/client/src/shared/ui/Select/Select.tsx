import type { SelectOptions } from '@shared/types'
import { FormField } from '@shared/ui/FormField'
import type { SelectHTMLAttributes } from 'react'

import './Select.scss'
interface Props extends SelectHTMLAttributes<HTMLElement> {
   label: string
   options: SelectOptions[]
}

export const Select = ({ label, options, ...props }: Props) => {
   return (
      <FormField label={label}>
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
