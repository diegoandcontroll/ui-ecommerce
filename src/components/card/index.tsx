import { FaHeart, FaShoppingCart } from 'react-icons/fa'

/* eslint-disable @next/next/no-img-element */
interface CardProps {
  title: string
  imageUrl: string
  description: string
  price: number
}
const Card = ({ description, imageUrl, title, price }: CardProps) => {
  return (
    <div className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div
        className="relative overflow-hidden bg-cover bg-no-repeat"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        <img className="rounded-t-lg" src={imageUrl} alt="" />
        <a href="#!">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(261,100%,50%,0.25)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
        </a>
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <h6 className="mb-2 text-lg font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          R$ - {price}
        </h6>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {description}
        </p>
        <div className="flex gap-4">
          <button className="flex items-center justify-center bg-gradient-to-r from-green-400 to-indigo-600 hover:from-green-600 hover:to-indigo-800 text-white rounded-lg px-4 py-2 transition-all duration-500 max-h-12 text-center hover:text-pink-500">
            <FaShoppingCart className="mr-2 w-8 h-8" />
            Carrinho
          </button>
          <button className="flex items-center justify-center bg-gradient-to-r from-green-400 to-indigo-600 hover:from-green-600 hover:to-indigo-800 text-white rounded-lg px-4 py-2 transition-all duration-500 max-h-12 hover:text-pink-500">
            <FaHeart className="mr-2 w-8 h-8" />
            Lista de Desejos
          </button>
        </div>
      </div>
    </div>
  )
}

export default Card
