import { useRef, useState } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation, useOutlet } from 'react-router-dom'

export const PageTransition = () => {
   const location = useLocation()
   const outlet = useOutlet()

   const container = useRef<HTMLDivElement>(null)
   const overlay = useRef<HTMLDivElement>(null)

   const [displayedOutlet, setDisplayedOutlet] = useState(outlet)
   const previousPath = useRef(location.pathname)

   useGSAP(
      () => {
         const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

         if (previousPath.current === location.pathname) {
            gsap.fromTo(
               container.current,
               { opacity: 0, y: 20 },
               { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            )
            return
         }

         previousPath.current = location.pathname

         if (prefersReducedMotion) {
            setDisplayedOutlet(outlet)
            gsap.set(container.current, { opacity: 1, y: 0, scale: 1, filter: 'none' })
            return
         }

         const tl = gsap.timeline({ defaults: { overwrite: 'auto' } })

         tl.set(overlay.current, { yPercent: -100 })
            .to(overlay.current, {
               yPercent: 0,
               duration: 0.4,
               ease: 'power3.inOut',
            })
            .to(
               container.current,
               {
                  opacity: 0,
                  scale: 0.96,
                  filter: 'blur(8px)',
                  duration: 0.3,
                  ease: 'power2.in',
               },
               '<',
            )
            .add(() => setDisplayedOutlet(outlet))
            .set(container.current, {
               opacity: 0,
               y: 24,
               scale: 1.02,
               filter: 'blur(10px)',
            })
            .to(overlay.current, {
               yPercent: 100,
               duration: 0.5,
               ease: 'power3.inOut',
            })
            .to(
               container.current,
               {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  filter: 'blur(0px)',
                  duration: 0.6,
                  ease: 'power3.out',
               },
               '<+0.05',
            )

            .set(overlay.current, { yPercent: -100 })
      },
      {
         scope: container,
         dependencies: [location.pathname],
      },
   )

   return (
      <>
         <div
            ref={overlay}
            className="pointer-events-none fixed inset-0 z-50 bg-black "
            style={{ transform: 'translateY(-100%)' }}
         />
         <div ref={container}>{displayedOutlet}</div>
      </>
   )
}
