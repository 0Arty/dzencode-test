export { productApi } from './api/productApi'
export {
   useCreateProduct,
   useProduct,
   useProducts,
   useProductsCount,
   useRemoveProduct,
   useUpdateProduct,
} from './lib/useProduct'
export { deleteProductCancelled, deleteProductRequested, productReducer, setProductFilter } from './model/productSlise'
export type { CreateProductDto, DeleteProductRequest, ProductsTypesFilter, UpdateProductDto } from './model/types'
export { ProductCard } from './ui/ProductCard'
export { ProductsList } from './ui/ProductsList'
