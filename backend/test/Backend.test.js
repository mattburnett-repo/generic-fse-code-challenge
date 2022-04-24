
//  FIXME: fix the "doesn't send query / returns empty object" issue in the insurance types test
//  TODO; move queries to separate file and export them here

const { ApolloServer } = require("apollo-server");
const request = require('supertest');
const { expect } = require('chai')

const { typeDefs } = require('../src/schema.ts'); // FIXME: dateScalars in schema.ts 
const resolvers = require('../src/resolvers');
const PolicyAPI = require('../src/datasources/policy-api');

// this should be imported from a separate file
const insuranceTypesQuery = {
    query: `query InsuranceTypes {
        insuranceTypes {
          id
          description
        }
      }
  `
}

let server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      policyAPI: new PolicyAPI()
    };
  }
});

describe('Code challenge backend tests', () => {
    let url;

    // before the tests we will spin up a new Apollo Server
    before(async () => {
        // Note we must wrap our object destructuring in parentheses because we already declared these variables
        // We pass in the port as 0 to let the server pick its own ephemeral port for testing
        ({ server, url } = await server.listen(0));
    });

      // after the tests we will stop our server
    after(async () => {
        await server?.close();
    });

    it('sends insurance types query', async () => {
        // send a really basic query to the url of the test server
        const theQueryUrl = "?query=query: query InsuranceTypes { insuranceTypes { description } }&operationName=InsuranceTypes"
        console.log('asdf', theQueryUrl)

        const response = await request(url)
          // .get('/')       // FIXME: 'empty object' problem is in here somewhere?
          .get({theQueryUrl})
          .send(); // query goes in here?

        const attributes = response.body;
        expect(attributes).to.not.be.null;

        console.log('attributes: ', attributes)

        // this works in Apollo Query Explorer, but fails here...
        expect(attributes).to.include.keys("data"); // ... returns empty object

        // once the 'empty object' issue is resolved, we can complete this test
      });   

    // once we get the 'empty object' problems solved, and the insurance types query test passes,
    //      write tests for

    // policies

    // policy statuses

    // providers

})

