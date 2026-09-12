export const ORDER_QUERY_KEY = 'orders'

export const ORDER_DETAIL_QUERY_KEY = (id: number) => [ORDER_QUERY_KEY, 'detail', id]
