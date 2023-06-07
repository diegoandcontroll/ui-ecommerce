import Table from '@/components/table'
import { ProductsTableStaticTr, ProductsTableTh } from '@/utils'

const Products = () => {
  return (
    <div className="px-44 py-20">
      <div>Categories</div>
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
