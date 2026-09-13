import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { DeleteOrderRequest, OrderState } from './types'

const initialState: OrderState = {
   orderID: null,
   orderName: '',
   isProductDropdownOpen: false,
}

const orderSlice = createSlice({
   name: 'order',
   initialState,
   reducers: {
      deleteOrderRequested: (state, action: PayloadAction<DeleteOrderRequest>) => {
         state.orderID = action.payload.orderID
         state.orderName = action.payload.orderName
      },
      deleteOrderCancelled: state => {
         state.orderID = null
         state.orderName = ''
      },
      setOrderId: (state, action: PayloadAction<number>) => {
         state.orderID = action.payload
      },
      openProductsDropdown: state => {
         state.isProductDropdownOpen = true
      },
      closeProductsDropdown: state => {
         state.isProductDropdownOpen = false
      },
      toggleProductsDropdown: state => {
         state.isProductDropdownOpen = !state.isProductDropdownOpen
      },
   },
})

export const {
   deleteOrderRequested,
   deleteOrderCancelled,
   setOrderId,
   openProductsDropdown,
   closeProductsDropdown,
   toggleProductsDropdown,
} = orderSlice.actions
export const orderReducer = orderSlice.reducer
