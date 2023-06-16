'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { ReactNode } from 'react'
interface MiddlewareProps {
  children: ReactNode
}
const Middleware = ({ children }: MiddlewareProps) => {
  const { data: session } = useSession()
  const router = useRouter()
  if (!session?.user) {
    router.push('/sign-in')
    return null
  }
  return <>{children}</>
}

export default Middleware
