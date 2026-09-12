import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { Order } from '@shared/types'

import type { DeleteOrderRequest, OrderState } from './types'

const initialState: OrderState = {
   orderID: null,
   orderName: '',
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
   },
})

export const { deleteOrderRequested, deleteOrderCancelled, setOrderId } = orderSlice.actions
export const orderReducer = orderSlice.reducer
