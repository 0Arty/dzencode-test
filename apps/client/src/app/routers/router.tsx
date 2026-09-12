// libs
import { NotFoundPage } from '@pages/NotFound'
import { OrdersPage } from '@pages/Orders/Orders.page'
import { ProductsPage } from '@pages/Products'
import { ROUTES } from '@shared/config'
import { createBrowserRouter } from 'react-router-dom'

// components
import { BaseLayout } from '../layouts/BaseLayout'

export const appRouter = createBrowserRouter(
   [
      {
         element: <BaseLayout />,
         path: '/',
         children: [
            {
               index: true,
               element: <ProductsPage />,
            },

            {
               path: ROUTES.PRODUCTS,
               element: <ProductsPage />,
            },
            {
               path: ROUTES.ORDERS,
               element: <OrdersPage />,
            },

            {
               path: '*',
               element: <NotFoundPage />,
            },
         ],
      },
   ],
   {
      basename: import.meta.env.BASE_URL,
   },
)
