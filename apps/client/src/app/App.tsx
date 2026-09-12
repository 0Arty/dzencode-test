import { QueryProvider, StoreProvider } from './providers'
import { AppRouter } from './routers'

export const App = () => {
   return (
      <StoreProvider>
         <QueryProvider>
            <AppRouter />
         </QueryProvider>
      </StoreProvider>
   )
}
