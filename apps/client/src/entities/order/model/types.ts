export interface CreateOrderDto {
   title: string
}

export interface OrderState {
   orderID: number | null
   orderName: string
   isProductDropdownOpen: boolean
}

export interface DeleteOrderRequest {
   orderID: number
   orderName: string
}
