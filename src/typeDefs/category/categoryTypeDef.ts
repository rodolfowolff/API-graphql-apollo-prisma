import { gql } from "apollo-server";

const categoryTypeDef = gql`
  type Category {
    id: Int
    name: String
  }

  type AllCategoryResult {
    categories: [Category]
    total: Float
  }

  type Query {
    getAllCategories: AllCategoryResult
  }

  type Mutation {
    createCategory(name: String!): String
  }
`;

export default categoryTypeDef;
