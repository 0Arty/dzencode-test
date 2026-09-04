import { QueryProvider } from '@app/providers'
import { AppRouter } from '@app/routers'

export const App = () => {
   return (
      <QueryProvider>
         <AppRouter />
      </QueryProvider>
   )
}
