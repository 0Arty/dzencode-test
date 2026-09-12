import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Order } from '@shared/types'

import type { DeleteOrderRequest, OrderState } from './types'

const initialState: OrderState = {
   orderID: null,
   orderName: '',
   orderDetails: null,
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
      setOrderDetails: (state, action: PayloadAction<Order>) => {
         state.orderDetails = action.payload
      },
   },
})

export const { deleteOrderRequested, deleteOrderCancelled, setOrderDetails } = orderSlice.actions
export const orderReducer = orderSlice.reducer
