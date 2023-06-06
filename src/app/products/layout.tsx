import { ReactNode } from 'react'
interface layoutProps {
  children: ReactNode
}
const Layout = ({ children }: layoutProps) => {
  return <>{children}</>
}

export default Layout
