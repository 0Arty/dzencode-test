import { modalReducer } from '@entities/modal'
import { orderReducer } from '@entities/order'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
   modal: modalReducer,
   order: orderReducer,
})

export type RootState = ReturnType<typeof rootReducer>
