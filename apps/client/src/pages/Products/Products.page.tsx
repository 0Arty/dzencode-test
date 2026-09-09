import { ProductsList, useProductsCount } from '@entities/product'
import { CreateProductButton } from '@features/create-product/ui/CreateProductButton/CreateProductButton'
import { Title } from '@shared/ui/Title'

export const ProductsPage = () => {
   const { data: count } = useProductsCount()

   return (
      <div className="d-flex flex-column gap-4">
         <div className="d-flex flex-column gap-2 ">
            <Title title={'Products'} count={count ?? 0} />
            <CreateProductButton />
         </div>
         <ProductsList />
      </div>
   )
}
