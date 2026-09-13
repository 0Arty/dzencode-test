import { useRef } from 'react'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

import { CreateOrderButton } from '@features/create-order'

import { useOrdersCount } from '@entities/order'
import { OrdersList } from '@entities/order/'

import { Title } from '@shared/ui/Title'

import './Order.page.scss'

gsap.registerPlugin(useGSAP)

export const OrdersPage = () => {
   const { data: count } = useOrdersCount()

   const containerRef = useRef<HTMLDivElement | null>(null)

   return (
      <div className="d-flex flex-column gap-4 px-2 w-100">
         <div className="d-flex flex-column gap-2">
            <Title title={'Orders'} count={count ?? 0} />
            <CreateOrderButton />
         </div>

         <div ref={containerRef} className="orders--container">
            <OrdersList />
         </div>
      </div>
   )
}
