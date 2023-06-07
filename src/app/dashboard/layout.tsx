import Sidebar from '@/components/asidebar'
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
      <Sidebar />
      {children}
    </>
  )
}

export default LayoutDashboard
