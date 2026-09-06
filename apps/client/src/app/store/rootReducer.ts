import { modalReducer } from '@entities/modal/model/modalSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
   modal: modalReducer,
})

export type RootState = ReturnType<typeof rootReducer>
