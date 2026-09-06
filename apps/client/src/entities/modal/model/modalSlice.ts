import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

import type { ModalKey, ModalState } from './types'

const initialState: ModalState = {
   navigationMenu: false,
   createOrder: false,
   createProduct: false,
   deleteOrder: false,
}

const modalSlice = createSlice({
   name: 'modal',
   initialState,
   reducers: {
      openModal: (state, action: PayloadAction<ModalKey>) => {
         state[action.payload] = true
      },
      closeModal: (state, action: PayloadAction<ModalKey>) => {
         state[action.payload] = false
      },
      toggleModal: (state, action: PayloadAction<ModalKey>) => {
         state[action.payload] = !state[action.payload]
      },
      closeAllModals: state => {
         ;(Object.keys(state) as ModalKey[]).forEach(key => {
            state[key] = false
         })
      },
   },
})

export const { openModal, closeModal, toggleModal, closeAllModals } = modalSlice.actions
export const modalReducer = modalSlice.reducer
