import Middleware from '@/utils/middleware'
import { ReactNode } from 'react'

interface WrapperMiddlewreProps {
  children: ReactNode
}
const WrapperMiddlewre = ({ children }: WrapperMiddlewreProps) => {
  return <Middleware>{children}</Middleware>
}

export default WrapperMiddlewre
