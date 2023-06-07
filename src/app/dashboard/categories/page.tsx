import Table from '@/components/table'
import { CategoriesTableStaticTr, CategoriesTableTh } from '@/utils'

const Categories = () => {
  return (
    <div className="grid grid-cols-1 px-64 py-20">
      <div>Categories</div>
      <div>
        <h2>Table</h2>
        <Table
          categoryTh={CategoriesTableTh}
          categoryTd={CategoriesTableStaticTr}
        />
      </div>
    </div>
  )
}

export default Categories
