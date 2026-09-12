import type { ModalKey } from './types'

export const selectIsModalOpen = (key: ModalKey) => (state: RootState) => state.modal[key]
