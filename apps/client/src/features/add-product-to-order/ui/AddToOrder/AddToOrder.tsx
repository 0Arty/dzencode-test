import { useState } from 'react'

import { ProductInOrder, useAddProductToOrder, useProductsWithOurOrder } from '@entities/product'

import { Dropdown } from '@shared/ui/Dropdown'

interface Props {
   orderID: number
}

export const AddToOrder = ({ orderID }: Props) => {
   const [isOpen, setIsOpen] = useState(false)
   const { data, isError, isLoading, error } = useProductsWithOurOrder(isOpen)
   const { mutate: addToOrder } = useAddProductToOrder()

   const openDropdownHandler = () => {
      setIsOpen(prev => !prev)
   }

   const addToOrderHandler = (id: number) => {
      addToOrder({
         orderID,
         productID: id,
      })
   }

   if (isError) {
      return <h4>{error instanceof Error ? error.message : 'Failed to load products'}</h4>
   }

   return (
      <div className="add-to-order">
         <button onClick={openDropdownHandler}>{isOpen ? 'Close' : 'Add to order'}</button>

         <Dropdown isOpen={isOpen}>
            {isLoading && <div>Loading...</div>}

            {data?.items.map(product => (
               <ProductInOrder data={product} key={product.id} onClick={addToOrderHandler} icon="add" />
            ))}
         </Dropdown>
      </div>
   )
}
