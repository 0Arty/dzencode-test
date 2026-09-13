import { Outlet } from 'react-router-dom'

import { Header } from '@widgets/Header'
import { NavigationMenu } from '@widgets/NavigationMenu'
import { OrderDetailsModal } from '@widgets/order-details/'

import { CreateOrderModal } from '@features/create-order/'
import { CreateProductModal } from '@features/create-product'
import { RemoveOrderModal } from '@features/remove-order/'
import { RemoveProductModal } from '@features/remove-product'

import './BaseLayout.scss'

export const BaseLayout = () => {
   return (
      <>
         <Header />

         <CreateOrderModal />
         <CreateProductModal />
         <RemoveOrderModal />
         <RemoveProductModal />
         <OrderDetailsModal />

         <main className="app-wrapper">
            <NavigationMenu />
            <div className="d-flex / py-5">
               <Outlet />
            </div>
         </main>
      </>
   )
}
