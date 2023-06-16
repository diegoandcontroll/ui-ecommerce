import Sidebar from '@/components/asidebar'
import MiddlewareAdmin from '@/utils/middlewareAdmin'
import { ReactNode } from 'react'

interface LayoutDashProps {
  children: ReactNode
}
export const metadata = {
  title: 'Dashboard - StarwarsCommerce',
  description: 'Ecommerce starwars with nextjs',
}
const LayoutDashboard = ({ children }: LayoutDashProps) => {
  return (
    <>
      <MiddlewareAdmin>
        <Sidebar />
        {children}
      </MiddlewareAdmin>
    </>
  )
}

export default LayoutDashboard
