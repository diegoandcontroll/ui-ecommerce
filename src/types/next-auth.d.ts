/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
import { Customer } from './customer'

declare module 'next-auth' {
  interface Session {
    user: {
      customer: Customer
      access_token: string
    }
  }
}
