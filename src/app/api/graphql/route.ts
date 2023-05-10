import { ApolloServer, gql } from "apollo-server-micro";
import { send } from "micro";

const typeDefs = gql`
  type Query {
    sayHello: String
  }
`;

const resolvers = {
  Query: {
    sayHello(parent, args, context) {
      return "Hello World!";
    },
  },
};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

export const POST = (req, res) => {
  apolloServer.createHandler({
    path: "/api/graphql/",
  })(req, res);
};
