const Dashboard = () => {
  return (
    <div className="px-64 py-20 gap-16 min-w-full">
      <div className="p-8 ml-12 min-w-full">
        <h1 className="text-3xl text-end mb-4 font-light">
          🌌 Welcome Dashboard Shopping for Star Wars Parts! 🚀
        </h1>
        <p className="text-lg text-end">
          Here, you will find the finest parts inspired by the Star Wars galaxy
          for your collectibles!
        </p>
      </div>

      <div className="">
        <h2 className="text-2xl font-extralight mb-4 text-center pt-4">
          E-commerce Information
        </h2>
        <div className="p-8 rounded-lg flex items-center justify-center ml-32">
          <div className="text-blue-400 flex justify-center items-center gap-8">
            <div className="bg-slate-200 p-4 rounded shadow flex-col items-center justify-center min-w-[250px]">
              <h3 className="text-lg font-semibold text-center">Categories</h3>
              <p className="text-3xl font-bold mt-2 text-center">{20}</p>
            </div>
            <div className="bg-slate-200 p-4 rounded shadow flex-col items-center justify-center min-w-[250px]">
              <h3 className="text-lg font-semibold text-center">Customers</h3>
              <p className="text-3xl font-bold mt-2 text-center">{1000}</p>
            </div>
            <div className="bg-slate-200 p-4 rounded shadow flex-col items-center justify-center min-w-[250px]">
              <h3 className="text-lg font-semibold text-center">Products</h3>
              <p className="text-3xl font-bold mt-2 text-center">{100}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
