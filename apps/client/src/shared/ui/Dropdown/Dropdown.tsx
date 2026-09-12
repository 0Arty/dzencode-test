import type { ReactNode } from 'react'
import './Dropdown.scss'
interface Props {
   isOpen: boolean
   children: ReactNode
}

export const Dropdown = ({ isOpen, children }: Props) => {
   return <div className="dropdown">{children}</div>
}
