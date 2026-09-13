import { openModal } from '@entities/modal'
import type { DeleteProductRequest } from '@entities/product'
import { deleteProductRequested } from '@entities/product'

import { useFormattedString } from '@shared/hooks'
import { useAppDispatch } from '@shared/lib/'
import { type Product } from '@shared/types'

import Monitor from '@icons/monitor.svg?react'
import Trash from '@icons/trash.svg?react'

import './ProductCard.scss'

interface Props {
   data: Product
}

export const ProductCard = ({ data }: Props) => {
   const { title, serialNumber, isNew, guarantee_start, guarantee_end, order, prices, createdAt, id } = data
   const dispatch = useAppDispatch()

   const { fullFormatNumeric: guaranteeStart } = useFormattedString({ isoString: guarantee_start })
   const { fullFormatNumeric: guaranteeEnd } = useFormattedString({ isoString: guarantee_end })
   const { formatNumeric, formatString } = useFormattedString({ isoString: createdAt })

   const payload: DeleteProductRequest = {
      productID: id,
      productName: title,
   }

   const openRemoveRequestModal = () => {
      dispatch(openModal('deleteProduct'))
      dispatch(deleteProductRequested(payload))
   }

   return (
      <div className="product-card">
         <div className="product-card--image ">
            <Monitor />
         </div>
         <div className="product-card--name ">
            <h5 className="mb-0">{title}</h5>
            <h6 className="mb-0 opacity-75">
               <span>S.N: </span> {serialNumber}
            </h6>
         </div>
         <div className="product-card--guarantee ">
            <h6>
               <span className="opacity-75">Start:</span>
               <b> {guaranteeStart}</b>
            </h6>
            <h6>
               <span className="opacity-75">Start:</span> <b>{guaranteeEnd}</b>
            </h6>
         </div>

         <div className="product-card--using ">
            <h6>
               <span className="opacity-75">Condition:</span> <b>{isNew ? 'New' : 'Used'}</b>
            </h6>
         </div>
         <div className="product-card--prices ">
            {prices.map(price => {
               return (
                  <div key={price.id}>
                     <span className="opacity-75">{price.symbol}: </span> <b>{price.value}</b>
                  </div>
               )
            })}
         </div>

         <div className="product-card--order ">
            {order?.title && (
               <h6>
                  <span className="opacity-75">Order: </span>
                  <b>{order.title}</b>
               </h6>
            )}

            {!order?.title && (
               <h6>
                  <span className="opacity-75">- </span>
               </h6>
            )}
         </div>

         <div className="product-card--date ">
            <h6>{formatNumeric}</h6>
            <h6> {formatString}</h6>
         </div>

         <button className="product-card--remove " onClick={openRemoveRequestModal}>
            <Trash />
         </button>
      </div>
   )
}
