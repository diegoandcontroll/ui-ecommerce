import Table from '@/components/table'
import { CustomerTableStaticTr, CustomerTableTh } from '@/utils'

const Customers = () => {
  return (
    <div className="grid grid-cols-1 px-64 py-20">
      <div>Customers</div>
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
