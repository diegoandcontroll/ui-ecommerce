'use client'

import { useSession } from 'next-auth/react'

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const { data: session } = useSession()
  console.log({ session })
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="max-w-4xl mx-auto  px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold  mb-4">
          Bem-vindo {session?.user && session?.user.customer.firstname} à nossa
          loja de Star Wars!
        </h1>
        <p className="text-lg  mb-8">
          Explore a galáxia Star Wars com nossa incrível coleção de itens.
          Oferecemos uma ampla variedade de produtos, desde action figures até
          roupas temáticas e acessórios exclusivos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://t.ctcdn.com.br/FlW3vW4SceQnoSxEas4zU7MAH94=/963x542/smart/i447716.jpeg"
              alt="Item 1"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Action Figure de Luke Skywalker
            </h2>
            <p className="text-gray-600">
              Reviva as aventuras do herói Jedi Luke Skywalker com essa action
              figure de alta qualidade.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://lumiere-a.akamaihd.net/v1/images/image_f6539c30.jpeg?region=510,0,1480,833&width=768"
              alt="Item 2"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Camiseta Darth Vader
            </h2>
            <p className="text-gray-600">
              Mostre seu lado sombrio com essa camiseta estilizada com o icônico
              personagem Darth Vader.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-4">
            <img
              src="https://rollingstone.uol.com.br/media/uploads/montagem-copias-starwars.jpg"
              alt="Item 3"
              className="w-full h-40 object-cover mb-4 rounded-md"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Sabre de Luz com Efeitos Sonoros
            </h2>
            <p className="text-gray-600">
              Domine a Força com um sabre de luz realista, com efeitos sonoros
              autênticos e design premium.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
