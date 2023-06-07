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
    <div className="flex flex-row">
      <Sidebar />
      {children}
    </div>
  )
}

export default LayoutDashboard
