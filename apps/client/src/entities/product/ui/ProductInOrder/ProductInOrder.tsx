import Monitor from '@icons/monitor.svg?react'
import Trash from '@icons/trash.svg?react'
import Add from '@icons/add.svg?react'
import type { Product } from '@shared/types'
import './ProductInOrder.scss'

interface Props {
   data: Product
   onClick: (id: number) => void
   icon: 'delete' | 'add'
}

export const ProductInOrder = ({ data, onClick, icon }: Props) => {
   const { title, id, serialNumber } = data

   const Icons = {
      delete: Trash,
      add: Add,
   }

   const Icon = Icons[icon]

   return (
      <div className={'product-in-order'}>
         <div className="product-in-order--image">
            <Monitor />
         </div>
         <div className="product-in-order--title">
            <h4>{title}</h4>
            <h5>{serialNumber}</h5>
         </div>
         <button className="product-in-order--remove" onClick={() => onClick(id)}>
            <Icon />
         </button>
      </div>
   )
}
