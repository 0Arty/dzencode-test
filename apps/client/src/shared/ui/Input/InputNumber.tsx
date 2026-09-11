import { FormField } from '@shared/ui/FormField'
import classNames from 'classnames'
import type { ChangeEvent, InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

import './Input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label: string
   error?: FieldError | { message?: string }
}

export const InputNumber = ({ error, label, onChange, ...props }: Props) => {
   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      event.target.value = event.target.value.replace(/\D/g, '')
      onChange?.(event)
   }

   return (
      <FormField label={label} error={error}>
         <input
            {...props}
            className={classNames('input', { 'input--error': error?.message })}
            onChange={handleChange}
         />
      </FormField>
   )
}
