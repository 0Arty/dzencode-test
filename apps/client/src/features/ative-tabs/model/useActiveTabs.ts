import { useEffect, useState } from 'react'

import { socket } from '@shared/api/websocket'

export const useActiveTabs = () => {
   const [activeTabs, setActivetabs] = useState<number>(0)

   useEffect(() => {
      const handleActiveTabs = (count: number) => {
         setActivetabs(count)
      }

      socket.on('activeTabs', handleActiveTabs)

      return () => {
         socket.off('activeTabs', handleActiveTabs)
      }
   }, [])

   return activeTabs
}
