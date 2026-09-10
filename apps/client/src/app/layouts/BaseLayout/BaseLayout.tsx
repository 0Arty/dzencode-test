import { CreateOrderModal } from '@features/create-order/ui/CreateOrderModal'
import { CreateProductModal } from '@features/create-product/ui/CreateProductModal'
import { RemoveOrderModal } from '@features/remove-order/ui/RemoveOrderModal/RemoveOrderModal'
import { Header } from '@widgets/Header'
import { NavigationMenu } from '@widgets/NavigationMenu'
import { Outlet } from 'react-router-dom'

import './BaseLayout.scss'

export const BaseLayout = () => {
   return (
      <>
         <Header />

         <CreateOrderModal />
         <CreateProductModal />
         <RemoveOrderModal />

         <main className="app-wrapper">
            <NavigationMenu />
            <div className="d-flex / py-5">
               <Outlet />
            </div>
         </main>
      </>
   )
}
