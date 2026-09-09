import { type RefObject, useRef } from 'react'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

gsap.registerPlugin(useGSAP)

export const useAnimation = (isOpen: boolean): RefObject<HTMLElement | null> => {
   const ref = useRef<HTMLElement>(null)
   const timeline = useRef<gsap.core.Timeline | null>(null)

   useGSAP(
      () => {
         if (!ref.current) return

         const mm = gsap.matchMedia()

         mm.add('(max-width: 1023px)', () => {
            gsap.set(ref.current, {
               clipPath: 'inset(0 100% 0 0)',
            })

            timeline.current = gsap
               .timeline({ paused: true })
               .to(ref.current, {
                  clipPath: 'inset(0 0% 0 0)',
                  duration: 0.4,
                  ease: 'power3.out',
               })
               .from(
                  '.nav-list--link',
                  {
                     opacity: 0,
                     x: -20,
                     duration: 0.3,
                     stagger: 0.08,
                  },
                  '-=0.15',
               )

            if (isOpen) {
               timeline.current.play()
            }
         })

         return () => {
            timeline.current?.kill()
            timeline.current = null
            mm.revert()
         }
      },
      {
         scope: ref,
      },
   )

   useGSAP(() => {
      if (!timeline.current) return

      timeline.current[isOpen ? 'play' : 'reverse']()
   }, [isOpen])

   return ref
}
