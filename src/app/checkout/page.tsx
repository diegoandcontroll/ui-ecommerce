import ListProducts from '@/components/listproducts'
import { ProductsTableStaticTr } from '@/utils'

const CheckOut = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h2>CheckOut</h2>
      <ListProducts items={ProductsTableStaticTr} oneButton />
    </div>
  )
}

export default CheckOut
