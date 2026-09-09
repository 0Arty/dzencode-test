import { type RefObject, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

gsap.registerPlugin(useGSAP)

export const useAnimation = (isOpen: boolean): RefObject<HTMLElement | null> => {
   const ref = useRef<HTMLElement>(null)

   useGSAP(() => {
      if (!ref.current) return
      const tl = gsap.timeline()

      tl.to(ref.current, {
         '--menu-clip': isOpen ? 'inset(0 0% 0 0)' : 'inset(0 100% 0 0)',
         duration: 0.4,
         ease: isOpen ? 'power3.out' : 'power3.in',
      })

      if (isOpen) {
         tl.from('.nav-list--link', { opacity: 0, x: -20, duration: 0.3, stagger: 0.08 }, '-=0.15')
      }
   }, [isOpen])

   return ref
}
