import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500', '900'] })

export const metadata = {
  title: 'StarwarsCommerce',
  description: 'Ecommerce starwars with nextjs',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-slate-900 text-white`}>
        {children}
      </body>
    </html>
  )
}
