import { useMemo } from 'react'

interface Props {
   isoString: Date
}

export const useFormattedString = ({ isoString }: Props) => {
   return useMemo(() => {
      const date = new Date(isoString)

      if (isNaN(date.getTime())) {
         return { formatNumeric: '', formatString: '' }
      }

      const formatNumeric = date.toLocaleDateString('en-US', {
         month: '2-digit',
         year: 'numeric',
      })

      const formatString = date.toLocaleDateString('en-US', {
         day: '2-digit',
         month: 'short',
         year: 'numeric',
      })

      return {
         formatNumeric,
         formatString,
      }
   }, [isoString])
}
