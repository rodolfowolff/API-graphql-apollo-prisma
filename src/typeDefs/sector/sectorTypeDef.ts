import { gql } from "apollo-server";

const sectorTypeDef = gql`
  type Sector {
    name: String
  }

  type AllSectorResult {
    sectors: [Sector]
    total: Float
  }

  type Query {
    getAllSectors: AllSectorResult
  }

  type Mutation {
    createSector(name: String!): String
  }
`;

export default sectorTypeDef;
