import ListProducts from '@/components/listproducts'
import { ProductsTableStaticTr } from '@/utils'
import Middleware from '@/utils/middleware'

const WishList = () => {
  return (
    <Middleware>
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <h2>WishList</h2>
        <ListProducts items={ProductsTableStaticTr} />
      </div>
    </Middleware>
  )
}

export default WishList
