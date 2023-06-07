import Table from '@/components/table'
import { ProductsTableStaticTr, ProductsTableTh } from '@/utils'

const Products = () => {
  return (
    <div className="grid grid-cols-1 px-64 py-20">
      <div>Products</div>
      <div>
        <h2>Table</h2>
        <Table
          productsTh={ProductsTableTh}
          productsTd={ProductsTableStaticTr}
        />
      </div>
    </div>
  )
}

export default Products
