import { QueryProvider, StoreProvider } from '@app/providers'
import { AppRouter } from '@app/routers'

export const App = () => {
   return (
      <StoreProvider>
         <QueryProvider>
            <AppRouter />
         </QueryProvider>
      </StoreProvider>
   )
}
