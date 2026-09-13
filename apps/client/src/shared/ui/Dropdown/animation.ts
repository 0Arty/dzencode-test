import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

export const useAnimation = (isOpen: boolean) => {
   const dropdownRef = useRef<HTMLDivElement | null>(null)
   const timeline = useRef<gsap.core.Timeline | null>(null)

   useGSAP(() => {
      if (!dropdownRef.current) {
         return
      }

      timeline.current = gsap.timeline({ paused: true }).fromTo(
         dropdownRef.current,
         {
            height: 0,
            clipPath: 'inset(0 0 100% 0)',
         },
         {
            clipPath: 'inset(0 0 0% 0)',
            duration: 0.2,
            ease: 'power2.inOut',
            height: '40dvh',
         },
      )
   })

   useGSAP(() => {
      if (!timeline.current) {
         return
      }

      if (isOpen) {
         timeline.current.play()
      } else {
         timeline.current.reverse()
      }
   }, [isOpen])

   return { dropdownRef }
}
