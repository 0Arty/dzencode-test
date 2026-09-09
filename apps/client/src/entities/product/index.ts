export { productApi } from './api/productApi'
export {
   useCreateProduct,
   useProduct,
   useProducts,
   useProductsCount,
   useRemoveProduct,
   useUpdateProduct,
} from './lib/useProduct'
export type { CreateProductDto, UpdateProductDto } from './model/types'
export { ProductCard } from './ui/ProductCard'
export { ProductsList } from './ui/ProductsList'
