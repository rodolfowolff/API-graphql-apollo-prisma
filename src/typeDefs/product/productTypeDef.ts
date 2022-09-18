import { gql } from "apollo-server";

const productTypeDef = gql`
  scalar Date

  type Product {
    name: String
    createdAt: Date
  }

  type AllProductsResult {
    products: [Product]
    total: Float
  }

  type Query {
    getAllProducts: AllProductsResult
  }

  type Mutation {
    createProduct(name: String!, sectorId: Int!): String
  }
`;

export default productTypeDef;
