import { type ReactNode } from 'react'

import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { toast } from 'react-toastify'

import { getErrorMessage } from '@shared/lib'

const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         staleTime: 60 * 1000,
         gcTime: 10 * 60 * 1000,
         retry: (failureCount, error) => {
            const status = (error as any)?.response?.status
            if (status === 404) return false
            return failureCount < 2
         },
         refetchOnWindowFocus: false,
      },
   },

   queryCache: new QueryCache({
      onError: error => {
         toast.error(getErrorMessage(error))
      },
   }),
   mutationCache: new MutationCache({
      onError: error => {
         toast.error(getErrorMessage(error))
      },
   }),
})

interface Props {
   children: ReactNode
}

export const QueryProvider = ({ children }: Props) => {
   return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}
