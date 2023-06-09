/* eslint-disable @next/next/no-img-element */
import { ProductType } from '@/utils'
import { FaShoppingCart, FaTrash } from 'react-icons/fa'

interface ListProductsProps {
  items: Array<ProductType>
  oneButton?: boolean
}
const ListProducts = ({ items, oneButton = false }: ListProductsProps) => {
  return (
    <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
      {items.map((p) => (
        <>
          <li className="pb-4 pt-4 sm:pb-4 w-[600px]" key={p.id}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-12 h-12 rounded-full"
                  src={p.imageUrl}
                  alt="Neil image"
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {p.name}
                </p>
                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  {p.description}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                R$ - {p.price}
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                <div className="flex gap-4 justify-center items-center">
                  {oneButton ? (
                    <button className="flex items-center justify-center bg-gradient-to-r from-green-400 to-indigo-600 hover:from-green-600 hover:to-indigo-800 text-white rounded-lg px-4 py-2 transition-all duration-500 max-h-12 hover:text-pink-500">
                      <FaTrash className="mr-2 w-6 h-6" />
                    </button>
                  ) : (
                    <>
                      <button className="flex items-center justify-center bg-gradient-to-r from-green-400 to-indigo-600 hover:from-green-600 hover:to-indigo-800 text-white rounded-lg px-4 py-2 transition-all duration-500 max-h-12 text-center hover:text-pink-500">
                        <FaShoppingCart className="mr-2 w-6 h-6" />
                      </button>
                      <button className="flex items-center justify-center bg-gradient-to-r from-green-400 to-indigo-600 hover:from-green-600 hover:to-indigo-800 text-white rounded-lg px-4 py-2 transition-all duration-500 max-h-12 hover:text-pink-500">
                        <FaTrash className="mr-2 w-6 h-6" />
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          </li>
        </>
      ))}
    </ul>
  )
}

export default ListProducts
