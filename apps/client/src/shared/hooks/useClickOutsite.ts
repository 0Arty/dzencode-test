import { type RefObject, useEffect } from 'react'

export const useClickOutside = (ref: RefObject<HTMLElement | null>, onClickOutside: () => void, enabled = true) => {
   useEffect(() => {
      if (!enabled) return

      const handleClick = (event: MouseEvent | TouchEvent) => {
         const target = event.target as Node
         if (ref.current && !ref.current.contains(target)) {
            onClickOutside()
         }
      }

      document.addEventListener('mousedown', handleClick)
      document.addEventListener('touchstart', handleClick)

      return () => {
         document.removeEventListener('mousedown', handleClick)
         document.removeEventListener('touchstart', handleClick)
      }
   }, [ref, onClickOutside, enabled])
}
