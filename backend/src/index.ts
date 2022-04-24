import { ApolloServer } from "apollo-server";

const { dateScalar, typeDefs } = require('./schema'); // FIXME: dateScalar
const resolvers = require('./resolvers');
const PolicyAPI = require('./datasources/policy-api');

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      policyAPI: new PolicyAPI()    // this has all of the get methods
    };
  }
});

// The `listen` method launches a web server.
server.listen(process.env.APOLLOQL_PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
