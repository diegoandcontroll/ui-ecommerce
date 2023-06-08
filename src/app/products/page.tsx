import Card from '@/components/card'
import { ProductsTableStaticTr } from '@/utils'

const Products = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <div className="grid grid-cols-3 gap-12">
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
  )
}

export default Products
