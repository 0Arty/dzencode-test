import { Footer } from '@widgets/Footer/Footer'
import { Header } from '@widgets/Header'
import { Outlet } from 'react-router-dom'

export const BaseLayout = () => {
   return (
      <>
         <Header />
         <main>
            <Outlet />
         </main>
         <Footer />
      </>
   )
}
