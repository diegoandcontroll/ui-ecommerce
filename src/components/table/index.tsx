import { CustomerType, ProductType } from '@/utils'
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs'
import ActionsDeleteWrapper from './actionsDeleteWrapper'

interface TableProps {
  categoryTd?: Array<{ id: string; name: string }>
  categoryTh?: Array<{
    labelId: string
    labelName: string
    labelActions: string
  }>
  productsTd?: Array<ProductType>
  productsTh?: Array<{
    labelId: string
    labelName: string
    labelPrice: string
    labelCategory: string
    labelActions: string
  }>

  customerTd?: Array<CustomerType>
  customerTh?: Array<{
    labelId: string
    labelName: string
    labelEmail: string
    labelDate: string
  }>
}
const Table = ({
  categoryTd,
  categoryTh,
  productsTh,
  productsTd,
  customerTd,
  customerTh,
}: TableProps) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light w-full">
              <thead className="border-b font-medium dark:border-neutral-500 px-64">
                <tr>
                  {categoryTh &&
                    categoryTh?.map((c) => (
                      <>
                        <th scope="col" className="px-6 py-4">
                          {c.labelId}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {c.labelName}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {c.labelActions}
                        </th>
                      </>
                    ))}
                  {productsTh &&
                    productsTh?.map((p) => (
                      <>
                        <th scope="col" className="px-6 py-4">
                          {p.labelId}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {p.labelName}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {p.labelPrice}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {p.labelCategory}
                        </th>
                        <th scope="col" className="px-8 py-4">
                          {p.labelActions}
                        </th>
                      </>
                    ))}
                  {customerTh &&
                    customerTh?.map((c) => (
                      <>
                        <th scope="col" className="px-6 py-4">
                          {c.labelId}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {c.labelName}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {c.labelEmail}
                        </th>
                        <th scope="col" className="px-6 py-4">
                          {c.labelDate}
                        </th>
                      </>
                    ))}
                </tr>
              </thead>
              <tbody>
                {categoryTd &&
                  categoryTd?.map((c) => (
                    <tr
                      className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                      key={c.id}
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        {c.id}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{c.name}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <ActionsDeleteWrapper
                          title="Deseja remover a categoria?"
                          buttonText="Confirmar"
                        />
                      </td>
                    </tr>
                  ))}
                {productsTd &&
                  productsTd?.map((p) => (
                    <>
                      <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        key={p.id}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {p.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {p.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {p.price}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {p.category.name}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          <div className="flex justify-center items-center">
                            <BsFillPencilFill
                              color="bg-white"
                              className="ml-4 cursor-pointer"
                            />
                            <BsFillTrashFill
                              color="bg-white"
                              className="ml-4 cursor-pointer"
                            />
                          </div>
                        </td>
                      </tr>
                    </>
                  ))}
                {customerTd &&
                  customerTd?.map((c) => (
                    <>
                      <tr
                        className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
                        key={c.id}
                      >
                        <td className="whitespace-nowrap px-6 py-4 font-medium">
                          {c.id}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {c.firstname}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {c.email}
                        </td>
                        <td className="whitespace-nowrap px-6 py-4">
                          {c.createdAt}
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table
