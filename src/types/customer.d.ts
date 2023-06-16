/* eslint-disable no-use-before-define */
export type ResponseAuth = {
  customer: Customer
  access_token: string
}
export type Customer = {
  id: string
  firstname: string
  lastname: string
  email: string
  imageURl: string
  role: string
  createdAt: string
}
