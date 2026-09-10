import { CreateOrderModal } from '@features/create-order/ui'
import { CreateProductModal } from '@features/create-product/ui/CreateProductModal/CreateProductModal'
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
            <div className="container-fluid px-2 py-5">
               <Outlet />
            </div>
         </main>
      </>
   )
}
