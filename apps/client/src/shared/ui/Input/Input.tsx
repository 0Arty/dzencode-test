import classNames from 'classnames'
import type { InputHTMLAttributes } from 'react'
import type { FieldError } from 'react-hook-form'

import { FormField } from '@shared/ui/FormField'

import './Input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label: string
   error?: FieldError | { message?: string }
}

export const Input = ({ label, error, ...props }: Props) => {
   const title = label
   return (
      <FormField label={title} error={error}>
         <input {...props} className={classNames('input', { 'input--error': error?.message })} />
      </FormField>
   )
}
