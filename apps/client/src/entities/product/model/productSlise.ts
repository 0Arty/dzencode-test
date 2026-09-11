import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { ProductsTypesFilter } from '../model/types'

import type { DeleteProductRequest, ProductState } from './types'

const initialState: ProductState = {
   productID: null,
   productName: '',
   activeFilter: null,
}

const productSlice = createSlice({
   name: 'product',
   initialState,
   reducers: {
      deleteProductRequested: (state, action: PayloadAction<DeleteProductRequest>) => {
         state.productID = action.payload.productID
         state.productName = action.payload.productName
      },
      deleteProductCancelled: state => {
         state.productID = null
         state.productName = ''
      },
      setProductFilter: (state, action: PayloadAction<ProductsTypesFilter>) => {
         state.activeFilter = action.payload
      },
   },
})

export const { deleteProductRequested, deleteProductCancelled, setProductFilter } = productSlice.actions
export const productReducer = productSlice.reducer
