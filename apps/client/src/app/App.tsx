import { ToastContainer } from 'react-toastify'

import { QueryProvider, StoreProvider } from './providers'
import { AppRouter } from './routers'

export const App = () => {
   return (
      <StoreProvider>
         <QueryProvider>
            <AppRouter />

            <ToastContainer position="bottom-right" autoClose={3000} />
         </QueryProvider>
      </StoreProvider>
   )
}
