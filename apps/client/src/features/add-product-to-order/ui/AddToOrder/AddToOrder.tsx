import { toggleProductsDropdown } from '@entities/order'
import { ProductInOrder, useAddProductToOrder, useProductsWithOurOrder } from '@entities/product'

import { useAppDispatch, useAppSelector } from '@shared/lib'
import { Dropdown } from '@shared/ui/Dropdown'
import { Loader } from '@shared/ui/Loader'
import { StrokedButton } from '@shared/ui/StrokedButton'

import './AddToOrder.scss'

interface Props {
   orderID: number
}

export const AddToOrder = ({ orderID }: Props) => {
   const isDropdownOpen = useAppSelector(state => state.order.isProductDropdownOpen)
   const { data, isLoading } = useProductsWithOurOrder(isDropdownOpen)
   const { mutate: addToOrder } = useAddProductToOrder()

   const dispatch = useAppDispatch()

   const openDropdownHandler = () => {
      dispatch(toggleProductsDropdown())
   }

   const addToOrderHandler = (id: number) => {
      addToOrder({
         orderID,
         productID: id,
      })
   }

   return (
      <div className="add-to-order">
         <StrokedButton onClick={openDropdownHandler} className="add-to-order--button">
            {isDropdownOpen ? 'Close' : 'Add product'}
         </StrokedButton>

         <Dropdown isOpen={isDropdownOpen}>
            {isLoading && <Loader />}

            {data?.items.map(product => (
               <ProductInOrder data={product} key={product.id} onClick={addToOrderHandler} icon="add" />
            ))}

            {data?.items.length === 0 && (
               <div className="p-2">
                  <h4>No products without an order</h4>
               </div>
            )}
         </Dropdown>
      </div>
   )
}
