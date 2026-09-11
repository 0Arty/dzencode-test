import { modalReducer } from '@entities/modal'
import { orderReducer } from '@entities/order'
import { productReducer } from '@entities/product'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
   modal: modalReducer,
   order: orderReducer,
   product: productReducer,
})

export type RootState = ReturnType<typeof rootReducer>
