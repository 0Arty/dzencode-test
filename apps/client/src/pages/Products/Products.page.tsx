import { ProductsList } from '@entities/product'

export const ProductsPage = () => {
   return (
      <div className="container-fluid flex-column gap-4">
         <h1>Products</h1>

         <div className=" mt-4">
            <ProductsList />
         </div>
      </div>
   )
}
