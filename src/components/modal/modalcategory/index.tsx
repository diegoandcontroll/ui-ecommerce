'use client'
const ModalCategory = () => {
  return (
    <div className="flex-col justify-center items-center gap-2">
      <div className="flex flex-col space-y-2 w-72">
        <label htmlFor="name" className="text-white cursor-pointer">
          Name Category
        </label>
        <input
          id="name"
          type="text"
          className="bg-transparent border-b border-gray-300 hover:border-gray-500 focus:border-gray-500 outline-none transition-colors duration-300"
        />
      </div>
    </div>
  )
}

export default ModalCategory
