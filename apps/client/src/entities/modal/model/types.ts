export type ModalKey =
   'navigationMenu' | 'createProduct' | 'createOrder' | 'deleteOrder' | 'deleteProduct' | 'orderDetails'

export type ModalState = Record<ModalKey, boolean>
