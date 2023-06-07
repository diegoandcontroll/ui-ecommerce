import ModalProduct from '@/components/modal/modalproduct'
import Table from '@/components/table'
import ActionsNewWrapper from '@/components/wrappers/actionsNewWrapper'
import { ProductsTableStaticTr, ProductsTableTh } from '@/utils'

const Products = () => {
  return (
    <div className="grid grid-cols-1 px-64 py-20">
      <div>
        <ActionsNewWrapper
          title="Criar novo Produto"
          buttonText="Confirmar"
          component={ModalProduct}
          text="Novo Produto"
        />
      </div>
      <div>
        <Table
          productsTh={ProductsTableTh}
          productsTd={ProductsTableStaticTr}
        />
      </div>
    </div>
  )
}

export default Products
