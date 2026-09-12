import Monitor from '@icons/monitor.svg?react'
import Trash from '@icons/trash.svg?react'
import type { Product } from '@shared/types'
interface Props {
   data: Product
   onRemove: (id: number) => void
}

export const ProductInOrder = ({ data, onRemove }: Props) => {
   const { title, id } = data

   return (
      <div className={'product-in-order'}>
         <div className="product-in-order--image">
            <Monitor />
         </div>
         <div className="product-in-order--title">{title}</div>
         <button className="product-in-order--remove" onClick={() => onRemove(id)}>
            <Trash />
         </button>
      </div>
   )
}
