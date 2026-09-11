import { useAppDispatch, useAppSelector } from '@app/store/hooks'
import { type ProductsTypesFilter, setProductFilter } from '@entities/product'
import { productTypeFilters } from '@features/filter-products/model/productTypeFilters'
import type { ChangeEvent } from 'react'

const ALL_VALUE = ''

export const ProductsFilter = () => {
   const dispatch = useAppDispatch()
   const activeFilter = useAppSelector(state => state.product.activeFilter)

   const changeFilterHandler = (e: ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value
      const nextFilter: ProductsTypesFilter = value === ALL_VALUE ? null : (value as ProductsTypesFilter)
      dispatch(setProductFilter(nextFilter))
   }

   return (
      <div>
         <select className="select" value={activeFilter ?? ALL_VALUE} onChange={changeFilterHandler}>
            {productTypeFilters?.map(filter => (
               <option key={filter.value ?? ALL_VALUE} value={filter.value ?? ALL_VALUE} className="select--option">
                  {filter.title}
               </option>
            ))}
         </select>
      </div>
   )
}
