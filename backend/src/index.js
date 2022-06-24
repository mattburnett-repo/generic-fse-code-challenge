const { ApolloServer } =  require("apollo-server");

if(process.env.NODE_ENV !== 'prod') {
  require('dotenv').config();
}

const { dateScalar, typeDefs } = require('./schema.ts');
const resolvers = require('./resolvers');
const PolicyAPI = require('./datasources/policy-api');
const PORT = process.env.APOLLOQL_PORT || 5000

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      policyAPI: new PolicyAPI()  
    };
  }
});

// TODO: add cors?

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`Generic FSE / GraphQL Server ready at ${url}`);
});
