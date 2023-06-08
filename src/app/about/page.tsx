import Carousel from '@/components/carousel'
import React from 'react'

const About: React.FC = () => {
  return (
    <>
      <div className="relative min-h-screen">
        <div className="w-full transition-colors">
          <Carousel />
        </div>
        <div className="absolute inset-0 py-32 px-32">
          <h2 className="text-4xl mb-6 text-white font-medium leading-tight text-primary">
            Sobre o E-commerce
          </h2>
          <p className="text-2xl mb-4 font-light">
            O nosso e-commerce de peças de Star Wars oferece uma ampla variedade
            de produtos incríveis para os fãs da saga. Combinamos nossa paixão
            pelo universo de Star Wars com a conveniência das compras online,
            trazendo uma experiência única para os nossos clientes.
          </p>
          <p className="text-2xl mb-4 font-light">
            Nossa equipe é formada por desenvolvedores experientes em React,
            TypeScript e Next.js, que trabalham em conjunto para fornecer uma
            plataforma robusta e eficiente. Estamos empenhados em oferecer um
            serviço excepcional aos nossos clientes, garantindo uma navegação
            suave, um processo de compra seguro e uma entrega rápida dos
            produtos.
          </p>
          <p className="text-2xl mb-4 font-light">
            Esperamos que você aproveite a sua experiência de compra em nosso
            e-commerce de peças de Star Wars. Que a Força esteja com você!
          </p>
        </div>
      </div>
    </>
  )
}

export default About
