import type { InputHTMLAttributes } from 'react'

import './Input.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
   label: string
}

export const Input = ({ label, ...props }: Props) => {
   return (
      <label className="input">
         <div className="label">{label}</div>
         <input {...props} className="input--node" />
      </label>
   )
}
