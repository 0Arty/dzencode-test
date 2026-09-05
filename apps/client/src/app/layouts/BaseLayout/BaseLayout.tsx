import { ProductCreateModal } from '@entities/product/ui/ProductCreateModal'
import { Header } from '@widgets/Header'
import { NavigationMenu } from '@widgets/NavigationMenu'
import { Outlet } from 'react-router-dom'

import './BaseLayout.scss'

export const BaseLayout = () => {
   return (
      <>
         {/* <ProductCreateModal /> */}
         <Header />

         <main className="app-wrapper">
            <NavigationMenu />
            <div className="container-fluid px-2 py-5">
               <Outlet />
            </div>
         </main>
      </>
   )
}
