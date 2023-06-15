import ListProducts from '@/components/listproducts'
import { ProductsTableStaticTr } from '@/utils'
import Middleware from '@/utils/middleware'

const CheckOut = () => {
  return (
    <Middleware>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>CheckOut</h2>
        <ListProducts items={ProductsTableStaticTr} oneButton />
      </div>
    </Middleware>
  )
}

export default CheckOut
