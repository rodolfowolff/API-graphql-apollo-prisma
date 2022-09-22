import { gql } from "apollo-server";

const productTypeDef = gql`
  scalar Date

  type Product {
    id: Int
    name: String
    quantity: Int
    code: String
    createdAt: Date
    category: Category
  }

  type AllProductsResult {
    products: [Product]
    total: Float
  }

  type Query {
    getAllProducts: AllProductsResult
    getProductByID(id: Int!): Product
  }

  type Mutation {
    createProduct(name: String!, quantity: Int!, categoryId: Int!): String
    updateProduct(id: Int!, name: String, categoryId: Int): String
    deleteProduct(id: Int!): String
  }
`;

export default productTypeDef;
