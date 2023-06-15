import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import Providers from '@/contexts/Provider'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'
import './globals.css'
interface RootLayoutProps {
  children: ReactNode
}
const roboto = Roboto({ subsets: ['latin'], weight: ['300', '500', '900'] })

export const metadata = {
  title: 'StarwarsCommerce',
  description: 'Ecommerce starwars with nextjs',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.className} bg-slate-900 text-white`}>
        <Providers>
          <Navbar />
          {children}
        </Providers>
        <Footer />
      </body>
    </html>
  )
}
