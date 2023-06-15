'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
interface MiddlewareAdminProps {
  children: ReactNode
}
const MiddlewareAdmin = ({ children }: MiddlewareAdminProps) => {
  const { data: session } = useSession()
  const router = useRouter()
  if (!session?.user && session?.user.customer.role !== 'ADMIN') {
    router.push('/')
    return null
  }
  return <>{children}</>
}

export default MiddlewareAdmin
