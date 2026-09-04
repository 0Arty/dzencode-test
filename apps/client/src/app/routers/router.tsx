// libs
import { NotFoundPage } from '@pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

import { HomePage } from '@/pages/Home'

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
               element: <HomePage />,
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
