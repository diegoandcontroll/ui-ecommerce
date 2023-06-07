'use client'
const ModalProduct = () => {
  return (
    <div className="flex-col justify-center items-center gap-2">
      <div className="flex flex-col space-y-2 w-72">
        <label htmlFor="name" className="text-white cursor-pointer">
          Name Product
        </label>
        <input
          id="name"
          type="text"
          className="bg-transparent border-b border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none transition-colors duration-300"
        />
      </div>
      <div className="flex flex-col space-y-4 w-72">
        <label
          htmlFor="price"
          className="text-white hover:text-gray-700 cursor-pointer py-2"
        >
          Price
        </label>
        <input
          id="price"
          type="number"
          className="bg-transparent border-b border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col space-y-4 w-72">
        <label
          htmlFor="image"
          className="text-white hover:text-gray-700 cursor-pointer py-2"
        >
          Image
        </label>
        <input
          id="image"
          type="text"
          className="bg-transparent border-b border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col space-y-4 w-72">
        <label
          htmlFor="input"
          className="text-white hover:text-gray-700 cursor-pointer py-2"
        >
          Category
        </label>
        <input
          id="input"
          type="text"
          className="bg-transparent border-b border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none transition-colors duration-300"
        />
      </div>

      <div className="flex flex-col space-y-4 w-72">
        <label
          htmlFor="input"
          className="text-white hover:text-gray-700 cursor-pointer py-2"
        >
          Description
        </label>
        <input
          id="input"
          type="text"
          className="bg-transparent border-b border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none transition-colors duration-300"
        />
      </div>
    </div>
  )
}

export default ModalProduct
