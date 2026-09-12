import { type RefObject, useEffect } from 'react'

export const useElementHeight = (ref: RefObject<HTMLElement | null>, cssVarName: string) => {
   useEffect(() => {
      if (!ref.current) {
         return
      }

      const element = ref.current

      if (!element) return

      const update = () => {
         const height = element.getBoundingClientRect().height
         document.documentElement.style.setProperty(cssVarName, `${height}px`)
      }

      update()

      const observer = new ResizeObserver(update)
      observer.observe(element)

      return () => observer.disconnect()
   }, [ref, cssVarName])
}
