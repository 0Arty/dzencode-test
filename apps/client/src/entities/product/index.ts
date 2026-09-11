export { productApi } from './api/productApi'
export {
   useCreateProduct,
   useProduct,
   useProducts,
   useProductsCount,
   useRemoveProduct,
   useUpdateProduct,
} from './lib/useProduct'
export { deleteProductCancelled, deleteProductRequested, productReducer } from './model/productSlise'
export type { CreateProductDto, DeleteProductRequest, UpdateProductDto } from './model/types'
export { ProductCard } from './ui/ProductCard'
export { ProductsList } from './ui/ProductsList'
