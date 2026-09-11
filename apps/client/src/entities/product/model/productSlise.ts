import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { DeleteProductRequest, ProductState } from './types'

const initialState: ProductState = {
   productID: null,
   productName: '',
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
   },
})

export const { deleteProductRequested, deleteProductCancelled } = productSlice.actions
export const productReducer = productSlice.reducer
