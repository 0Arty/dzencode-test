export { productApi } from './api/productApi'
export {
   useAddProductToOrder,
   useCreateProduct,
   useProducts,
   useProductsCount,
   useRemoveProduct,
   useRemoveProductFromOrder,
} from './lib/useProduct'
export { deleteProductCancelled, deleteProductRequested, productReducer, setProductFilter } from './model/productSlise'
export type { CreateProductDto, DeleteProductRequest, ProductsTypesFilter, UpdateProductDto } from './model/types'
export { ProductCard } from './ui/ProductCard'
export { ProductInOrder } from './ui/ProductInOrder'
export { ProductsList } from './ui/ProductsList'
