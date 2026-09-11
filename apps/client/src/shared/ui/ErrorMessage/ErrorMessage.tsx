import type { FieldError } from 'react-hook-form'

import './ErrorMessage.scss'
type ErrorMessageProps = {
   error?: FieldError | { message?: string }
   className?: string
}

export const ErrorMessage = ({ error, className = 'error-message' }: ErrorMessageProps) => {
   if (!error?.message) return null

   return <span className={className}>{error.message}</span>
}
