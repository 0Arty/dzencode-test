import { modalReducer } from '@entities/modal/model/modalSlice'
import { orderReducer } from '@entities/order/model/orderSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
   modal: modalReducer,
   order: orderReducer,
})

export type RootState = ReturnType<typeof rootReducer>
