import { useEffect, useState } from 'react'

const getCurrentTime = () =>
   new Date().toLocaleTimeString('uk-UA', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
   })

export const useCurrentTime = () => {
   const [time, setTime] = useState(getCurrentTime)

   useEffect(() => {
      const update = () => {
         setTime(getCurrentTime())
      }

      const timeoutId = setTimeout(() => {
         update()

         const intervalId = setInterval(update, 1000)

         return () => clearInterval(intervalId)
      }, 1000 - new Date().getMilliseconds())

      return () => clearTimeout(timeoutId)
   }, [])

   return time
}
