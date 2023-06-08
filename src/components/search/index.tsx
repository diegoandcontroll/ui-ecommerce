const SearchBar = () => {
  return (
    <div className="pb-8 px-14 w-3/5 outline-none ml-36">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 pl-10 text-sm text-gray-900 border border-green-400 rounded-lg bg-gray-50 focus:green-400 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-400 dark:focus:border-green-400"
          placeholder="Search Products..."
          required
        />
        <button className=" absolute right-2.5 bottom-2.5 bg-gradient-to-r from-green-400 to-indigo-600 hover:from-green-600 hover:to-indigo-800 text-white rounded-lg px-4 transition-all duration-500 hover:text-pink-500 py-[4px]">
          Search
        </button>
      </div>
    </div>
  )
}

export default SearchBar
