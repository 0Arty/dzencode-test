import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

gsap.registerPlugin(useGSAP)

interface Props {
   isOpen: boolean
}

export const useAnimation = ({ isOpen }: Props) => {
   const containerRef = useRef<HTMLDivElement>(null)
   const contentRef = useRef<HTMLDivElement>(null)
   const timeline = useRef<gsap.core.Timeline | null>(null)

   useGSAP(() => {
      if (!containerRef.current || !contentRef.current) {
         return
      }

      timeline.current = gsap
         .timeline({ paused: true })
         .set(containerRef.current, {
            // display: 'flex',
            autoAlpha: 1,
         })

         .fromTo(
            containerRef.current,
            {
               '--alpha': '0%',
               backdropFilter: 'blur(0rem)',
            },
            {
               '--alpha': '40%',
               backdropFilter: 'blur(0.25rem)',
               duration: 0.3,
               ease: 'power2.out',
            },
         )

         .fromTo(
            contentRef.current,
            {
               opacity: 0,
               y: 200,
            },
            {
               opacity: 1,
               y: 0,
               duration: 0.5,
               ease: 'power3.out',
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

   return { containerRef, contentRef }
}
