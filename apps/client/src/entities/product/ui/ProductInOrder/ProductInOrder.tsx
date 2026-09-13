import type { Product } from '@shared/types'

import Add from '@icons/add.svg?react'
import Monitor from '@icons/monitor.svg?react'
import Trash from '@icons/trash.svg?react'

import './ProductInOrder.scss'

interface Props {
   data: Product
   onClick: (id: number) => void
   icon: 'delete' | 'add'
}

export const ProductInOrder = ({ data, onClick, icon }: Props) => {
   const { title, id, serialNumber, prices } = data

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

         <div className="product--details">
            <div className="product--details--title">
               <h4 className=" mb-0 fs-6 fs-md-5">{title}</h4>
               <h5 className="fs-6 fs-md-5 mb-0 opacity-50">{serialNumber}</h5>
            </div>

            <div className="product--details--prices">
               {prices.map(price => {
                  return (
                     <div key={price.id}>
                        <span className="opacity-75">{price.symbol}: </span> <b>{price.value}</b>
                     </div>
                  )
               })}
            </div>
         </div>

         <button className="product-in-order--remove" onClick={() => onClick(id)}>
            <Icon />
         </button>
      </div>
   )
}
