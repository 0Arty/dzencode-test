export const ROUTES = {
   HOME: '/',
   CarPage: '/vehicles',
   CarDetails: '/vehicles/:vehicleId',
} as const

export const ROUTES_ID = {
   Car: ':vehicleId',
}
