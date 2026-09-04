import { type ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 60 * 1000,
         gcTime: 10 * 60 * 1000,
         retry: 2,
         refetchOnWindowFocus: false,
      },
   },
})

export const QueryProvider = ({ children }: { children: ReactNode }) => {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
