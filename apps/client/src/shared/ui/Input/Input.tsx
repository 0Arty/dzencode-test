import type { InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label: string
}

export const Input = ({ label, ...props }: Props) => {
   return (
      <label>
         <div className="label">{label}</div>
         <input {...props} />
      </label>
   )
}
