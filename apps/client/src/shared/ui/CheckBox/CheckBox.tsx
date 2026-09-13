import type { InputHTMLAttributes } from 'react'

import Checkbox from '@icons/check.svg?react'

import './CheckBox.scss'
interface Props extends InputHTMLAttributes<HTMLElement> {
   value: string
}

export const CheckBox = ({ value, ...props }: Props) => {
   return (
      <label className="checkbox">
         <input type="checkbox" className="checkbox--input" {...props} />
         <div className="checkbox--icon-container">
            <Checkbox className="checkbox--icon" />
         </div>

         <h5 className="checkbox--value">{value}</h5>
      </label>
   )
}
