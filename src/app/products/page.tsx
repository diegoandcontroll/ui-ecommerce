import Card from '@/components/card'
import CheckboxWrapper from '@/components/form/checkbox'
import SearchBar from '@/components/search'
import { ProductsTableStaticTr } from '@/utils'

const Products = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-20 ">
      <SearchBar />
      <div className="flex justify-start items-start gap-12">
        <CheckboxWrapper />
        <div className="flex-grow grid grid-cols-3 gap-12">
          {ProductsTableStaticTr.map((p) => (
            <Card
              key={p.id}
              description={p.description}
              imageUrl={p.imageUrl}
              title={p.name}
              price={p.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
