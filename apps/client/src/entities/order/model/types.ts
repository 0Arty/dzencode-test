import type { Order } from '@shared/types'

export interface CreateOrderDto {
   title: string
}

export interface OrderState {
   orderID: number | null
   orderName: string
   orderDetails: Order | null
}

export interface DeleteOrderRequest {
   orderID: number
   orderName: string
}
