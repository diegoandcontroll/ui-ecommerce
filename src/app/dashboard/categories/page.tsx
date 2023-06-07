import ModalCategory from '@/components/modal/modalcategory'
import Table from '@/components/table'
import ActionsNewWrapper from '@/components/wrappers/actionsNewWrapper'
import { CategoriesTableStaticTr, CategoriesTableTh } from '@/utils'

const Categories = () => {
  return (
    <div className="grid grid-cols-1 px-64 py-20">
      <div>
        <ActionsNewWrapper
          title="Criar nova Categoria"
          buttonText="Confirmar"
          component={ModalCategory}
          text="Nova Categoria"
        />
      </div>
      <div>
        <Table
          categoryTh={CategoriesTableTh}
          categoryTd={CategoriesTableStaticTr}
        />
      </div>
    </div>
  )
}

export default Categories
