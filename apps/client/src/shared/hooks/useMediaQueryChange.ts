import { useEffect } from 'react'

export const useMediaQueryChange = (query: string, onChange: (matches: boolean) => void) => {
   useEffect(() => {
      const mediaQueryList = window.matchMedia(query)

      const listener = (event: MediaQueryListEvent) => onChange(event.matches)

      onChange(mediaQueryList.matches)
      mediaQueryList.addEventListener('change', listener)

      return () => mediaQueryList.removeEventListener('change', listener)
   }, [query, onChange])
}
