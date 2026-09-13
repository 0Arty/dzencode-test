import axios from 'axios'

export const getErrorMessage = (error: unknown) => {
   if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message

      if (typeof message === 'string') {
         return message
      }
      if (Array.isArray(message) && message.every(item => typeof item === 'string')) {
         return message.join(', ')
      }
   }

   if (error instanceof Error) {
      return error.message
   }

   return 'Something went wrong'
}
