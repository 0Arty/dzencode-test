import { CreateProductButton } from '@features/create-product'
import { ProductsFilter } from '@features/filter-products'

import { ProductsList, useProductsCount } from '@entities/product'

import { useAppSelector } from '@shared/lib/'
import { Title } from '@shared/ui/Title'

export const ProductsPage = () => {
   const activeFilter = useAppSelector(state => state.product.activeFilter)
   const { data: count } = useProductsCount(activeFilter)

   return (
      <div className="d-flex flex-column gap-4 w-100 position-relative">
         <div className="d-flex flex-column gap-2 w-100 px-2">
            <div className="d-flex flex-row w-100 gap-4">
               <Title title={'Products'} count={count ?? 0} />
               <ProductsFilter />
            </div>
            <CreateProductButton />
         </div>

         <ProductsList />
      </div>
   )
}
