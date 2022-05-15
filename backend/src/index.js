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

// The `listen` method launches a web server.
server.listen(PORT).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});