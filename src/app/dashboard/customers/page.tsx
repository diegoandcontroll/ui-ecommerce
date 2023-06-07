import Table from '@/components/table'
import { CustomerTableStaticTr, CustomerTableTh } from '@/utils'

const Customers = () => {
  return (
    <div className="px-44 py-20">
      <div>Categories</div>
      <div>
        <h2>Table</h2>
        <Table
          customerTh={CustomerTableTh}
          customerTd={CustomerTableStaticTr}
        />
      </div>
    </div>
  )
}

export default Customers
