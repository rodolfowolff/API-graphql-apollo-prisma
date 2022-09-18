import { ApolloServer } from "apollo-server";
import typeDefs from "./typeDefs/index";
import { createContext } from "./context";
import resolvers from "./resolvers/index";

const port = process.env.PORT;

const server = new ApolloServer({
  typeDefs,
  context: createContext,
  resolvers,
});

server.listen({ port }).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
