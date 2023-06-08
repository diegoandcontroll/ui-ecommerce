/* eslint-disable no-use-before-define */
export const CategoriesTableTh = [
  {
    labelId: 'ID',
    labelName: 'Name',
    labelActions: 'Actions',
  },
]

export const ProductsTableTh = [
  {
    labelId: 'ID',
    labelName: 'Name',
    labelPrice: 'Price',
    labelCategory: 'Category',
    labelActions: 'Actions',
  },
]
export const CustomerTableTh = [
  {
    labelId: 'ID',
    labelName: 'Name',
    labelEmail: 'Email',
    labelDate: 'Date',
  },
]
export const CategoriesTableStaticTr: Array<CategoryType> = [
  {
    id: 'h12y337y1-123381823-12u7387123',
    name: 'Ships',
  },
  {
    id: 'h12y337y1-123381823-12u7387123',
    name: 'Ships',
  },
  {
    id: 'h12y337y1-123381823-12u7387123',
    name: 'Ships',
  },
  {
    id: 'h12y337y1-123381823-12u7387123',
    name: 'Ships',
  },
  {
    id: 'h12y337y1-123381823-12u7387123',
    name: 'Ships',
  },
]

export const ProductsTableStaticTr: Array<ProductType> = [
  {
    id: '2ee3b12b-9319-425d-b154-26d58829caa3',
    description:
      'The iconic starfighter used by the Rebel Alliance in their fight against the Galactic Empire.',
    name: 'X-wing Fighter',
    price: 200.0,
    imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    category: {
      id: 'c3d80dfa-5e35-412c-b80b-a6c8a8906dec',
      name: 'Ships',
    },
  },

  {
    id: '2ee3b12b-9319-425d-b154-26d58829caa3',
    description:
      'The iconic starfighter used by the Rebel Alliance in their fight against the Galactic Empire.',
    name: 'X-wing Fighter 2',
    price: 202.0,
    imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    category: {
      id: 'c3d80dfa-5e35-412c-b80b-a6c8a8906dec',
      name: 'Ships',
    },
  },

  {
    id: '2ee3b12b-9319-425d-b154-26d58829caa3',
    description:
      'The iconic starfighter used by the Rebel Alliance in their fight against the Galactic Empire.',
    name: 'X-wing Fighter 3',
    price: 201.0,
    imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    category: {
      id: 'c3d80dfa-5e35-412c-b80b-a6c8a8906dec',
      name: 'Ships',
    },
  },
  {
    id: '2ee3b12b-9319-425d-b154-26d58829caa3',
    description:
      'The iconic starfighter used by the Rebel Alliance in their fight against the Galactic Empire.',
    name: 'X-wing Fighter',
    price: 200.0,
    imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    category: {
      id: 'c3d80dfa-5e35-412c-b80b-a6c8a8906dec',
      name: 'Ships',
    },
  },

  {
    id: '2ee3b12b-9319-425d-b154-26d58829caa3',
    description:
      'The iconic starfighter used by the Rebel Alliance in their fight against the Galactic Empire.',
    name: 'X-wing Fighter 2',
    price: 202.0,
    imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    category: {
      id: 'c3d80dfa-5e35-412c-b80b-a6c8a8906dec',
      name: 'Ships',
    },
  },

  {
    id: '2ee3b12b-9319-425d-b154-26d58829caa3',
    description:
      'The iconic starfighter used by the Rebel Alliance in their fight against the Galactic Empire.',
    name: 'X-wing Fighter 3',
    price: 201.0,
    imageUrl: 'https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg',
    category: {
      id: 'c3d80dfa-5e35-412c-b80b-a6c8a8906dec',
      name: 'Ships',
    },
  },
]
export const CustomerTableStaticTr: Array<CustomerType> = [
  {
    id: '8740d329-62b8-4784-9ac9-dded108ac57e',
    firstname: 'Diego',
    email: 'lukasxdp2@gmail.com',
    createdAt: '2023-06-05',
  },
  {
    id: '8740d329-62b8-4784-9ac9-dded108ac57f',
    firstname: 'Diego',
    email: 'lukasxdp2@gmail.com',
    createdAt: '2023-06-05',
  },
  {
    id: '8740d329-62b8-4784-9ac9-dded108ac57g',
    firstname: 'Diego',
    email: 'lukasxdp2@gmail.com',
    createdAt: '2023-06-05',
  },
  {
    id: '8740d329-62b8-4784-9ac9-dded108ac57h',
    firstname: 'Diego',
    email: 'lukasxdp2@gmail.com',
    createdAt: '2023-06-05',
  },
]
export type ProductType = {
  id: string
  description: string
  name: string
  price: number
  imageUrl: string
  category: CategoryType
}
export type CustomerType = {
  id: string
  firstname: string
  email: string
  createdAt: string
}
export type CategoryType = {
  id: string
  name: string
}
