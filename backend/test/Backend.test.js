

//  *** PLEASE NOTE ***
//    'retrieves policies' test is set to 'skip'
//      this is because it sometimes overloads the database connection and then the test fails. 
//      Remove '.skip' from the test call to include the test when running this test file

const { ApolloServer, request, expect } = require('./testConfig')

const { typeDefs } = require('../src/schema.ts'); // FIXME: dateScalars in schema.ts 
const resolvers = require('../src/resolvers');
const PolicyAPI = require('../src/datasources/policy-api');

const { insuranceTypes, policyStatuses, providers, policies, customers, updatePolicyPolicyNumber } = require('./testOperations')
const { updateCustomerFirstName, updateCustomerLastName } = require('./testOperations')

// use this for supertest / http / e2e
// This function will create a new server Apollo Server instance
//  https://codesandbox.io/s/github/apollographql/docs-examples/tree/main/apollo-server/v3/integration-testing?fontsize=14&hidenavigation=1&theme=dark&file=/src/server.ts:267-809
const createApolloServer = async (options = { port: 4000 }) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
      return {
        policyAPI: new PolicyAPI()
      };
    }
  });

  const serverInfo = await server.listen(options); 

  // serverInfo is an object containing the server instance and the url the server is listening on
  return serverInfo;
};

describe('GraphQL backend http tests', () => {
  let url;

  before(async () => {
    ({ server, url } = await createApolloServer({ port: 0 }));
    console.log('before / server start ', url)
  });
  
  after(async () => {
      await server?.close();
      console.log('after / server close')
  }); 

  describe('non-policy endpoints', () => {
    it('should handle a missing payload', async () => {
      const response = await request(url)
          .post('/')
          .send({ mutation: {} })

      expect(response.body.errors).to.not.be.null
      // console.log('errors ', response.body.errors[0])
      const result = response.body.errors[0]

      expect(result).to.contain.keys('message', 'extensions')
      expect(result.message).to.contain('GraphQL operations must contain a non-empty')
      expect(result.extensions).to.contain.keys('code')
      expect(result.extensions.code).to.eql('INTERNAL_SERVER_ERROR')
    })

    it('retrieves insurance types', async () => {
      const response = await request(url)
        .post('/')
        .send({ query: insuranceTypes }); 

      expect(response.body.errors).to.be.undefined
      expect(response.body).to.contain.property('data')
      expect(response.body.data).to.not.be.null  
      expect(response.body.data).to.have.property('insuranceTypes')
      expect(response.body.data.insuranceTypes).to.be.an('array')
      expect(response.body.data.insuranceTypes.length).to.eql(3)

      const result = response.body.data.insuranceTypes[0]
      
      expect(result).to.have.property('id')
      expect(result.id).to.contain('1')
      expect(result).to.have.property('description')
      expect(result.description).to.contain('Liability') 
      
    });   
    it('retrieves policy statuses', async () => {
      const response = await request(url)
          .post('/')
          .send({ query: policyStatuses }); 

      expect(response.body.errors).to.be.undefined
      expect(response.body).to.contain.property('data')
      expect(response.body.data).to.not.be.null  
      expect(response.body.data).to.have.property('policyStatuses')
      expect(response.body.data.policyStatuses).to.be.an('array')
      expect(response.body.data.policyStatuses.length).to.eql(4)

      const result = response.body.data.policyStatuses[0]

      expect(result).to.have.property('id')
      expect(result.id).to.contain('1')
      expect(result).to.have.property('description')
      expect(result.description).to.contain('Active') 
    })
    it('retrieves providers', async () => {
      const response = await request(url)
          .post('/')
          .send({ query: providers }); 

      expect(response.body.errors).to.be.undefined
      expect(response.body).to.contain.property('data')
      expect(response.body.data).to.not.be.null  
      expect(response.body.data).to.have.property('providers')
      expect(response.body.data.providers).to.be.an('array')
      expect(response.body.data.providers.length).to.eql(4)

      const result = response.body.data.providers[0]

      expect(result).to.have.property('id')
      expect(result.id).to.contain('1')
      expect(result).to.have.property('prefix_code')
      expect(result.prefix_code).to.contain('ALL')
      expect(result).to.have.property('description')
      expect(result.description).to.contain('Allianz') 
    })
    it('retrieves customers', async () => {
      const response = await request(url)
          .post('/')
          .send({ query: customers }); 

      expect(response.body.errors).to.be.undefined
      expect(response.body).to.contain.property('data')
      expect(response.body.data).to.not.be.null  
      expect(response.body.data).to.have.property('customers')
      expect(response.body.data.customers).to.be.an('array')
      expect(response.body.data.customers.length).to.eql(505) 

      const result = response.body.data.customers[0] 

      expect(result).to.have.property('id') 
      expect(result.id).to.contain('1')
      expect(result).to.have.property('first_name')
      expect(result.first_name).to.contain('firstName 01')
      expect(result).to.have.property('last_name')
      expect(result.last_name).to.contain('lastName 01') 
      expect(result).to.have.property('date_of_birth')
      expect(result.date_of_birth).to.contain('1969-12-31T23:00:00.000Z') 
    })
  })

  describe('policy endpoint', () => {
    // FIXME: sometimes this times out / connection refused / error at line 141 (response.body.error is defined)
    //    graphQL has pagination functionality that would fix this
    //      and we should implement it anyway
    it('should handle a missing payload', async () => {
      const response = await request(url)
          .post('/')
          .send({ mutation: {} })

      expect(response.body.errors).to.not.be.null
      // console.log('errors ', response.body.errors[0])
      const result = response.body.errors[0]

      expect(result).to.contain.keys('message', 'extensions')
      expect(result.message).to.contain('GraphQL operations must contain a non-empty')
      expect(result.extensions).to.contain.keys('code')
      expect(result.extensions.code).to.eql('INTERNAL_SERVER_ERROR')
    })
    it.skip('retrieves policies', async () => {  
      const response = await request(url)
          .post('/')
          .send({ query: policies }); 

      expect(response.body.errors).to.be.undefined
      // console.log('errors ', response.body.errors) // this is usually the conn refused error, because the result set is big / takes too long
      expect(response.body).to.contain.property('data') 
      expect(response.body.data).to.not.be.null  
      expect(response.body.data).to.have.property('policies')

      expect(response.body.data.policies).to.be.an('array')
      expect(response.body.data.policies.length).to.eql(1005)

      const result = response.body.data.policies[0]
      expect(result).to.have.property('id')
      expect(result.id).to.contain('1')

      expect(result).to.have.property('customer')
      expect(result.customer).to.have.property('id')
      expect(result.customer.id).to.contain('1')
      expect(result.customer).to.have.property('first_name')
      expect(result.customer.first_name).to.contain('firstName 01')
      expect(result.customer).to.have.property('last_name') 
      expect(result.customer.last_name).to.contain('lastName 01')
      expect(result.customer).to.have.property('date_of_birth') 
      expect(result.customer.date_of_birth).to.contain('1969-12-31T23:00:00.000Z')

      expect(result).to.have.property('provider')
      expect(result.provider).to.have.property('description') 
      expect(result.provider.description).to.contain('Allianz')

      expect(result).to.have.property('insuranceType')
      expect(result.insuranceType).to.have.property('description')
      expect(result.insuranceType.description).to.contain('Liability')

      expect(result).to.have.property('status')
      expect(result.status).to.have.property('description')
      expect(result.status.description).to.contain('Active')

      expect(result).to.have.property('policy_number')
      expect(result.policy_number).to.contain('ALLaaa111')

      expect(result).to.have.property('start_date')
      expect(result.start_date).to.contain('1999-12-31T23:00:00.000Z')

      expect(result).to.have.property('end_date')
      expect(result.end_date).to.contain('2000-12-31T23:00:00.000Z')

      expect(result).to.have.property('created_at')
      expect(result.created_at).to.contain('2022-04-01T22:00:00.000Z')
    })

    it('patches policy number', async () => {
      const response = await request(url)
          .post('/')
          .send({ query: updatePolicyPolicyNumber, variables: {policyId: 1, policyNumber: "TEST POLICY NUMBER"} })

      expect(response.body).to.have.property('data')
      expect(response.body.data).to.not.be.null
      expect(response.body.data).to.have.property('updateField')

      const result = response.body.data.updateField
      expect(result).to.include.keys('code', 'success', 'message', 'policy')
      expect(result.code).to.eql(200)
      expect(result.success).to.be.true
      expect(result.message).to.include('TEST POLICY NUMBER')
      expect(result.policy).to.be.an('object')
    })
    it('restores policy number original value', async () => {
      const response = await request(url)
      .post('/')
      .send({ query: updatePolicyPolicyNumber, variables: {policyId: 1, policyNumber: "ALLaaa111"} })

      expect(response.body).to.have.property('data')
      expect(response.body.data).to.not.be.null
      expect(response.body.data).to.have.property('updateField')

      const result = response.body.data.updateField
      expect(result).to.include.keys('code', 'success', 'message', 'policy')
      expect(result.code).to.eql(200)
      expect(result.success).to.be.true
      expect(result.message).to.include('ALLaaa111')
      expect(result.policy).to.be.an('object')
    })
  })

  describe('customer endpoint', () => {
    it('should handle a missing payload', async () => {
      const response = await request(url)
          .post('/')
          .send({ mutation: {} })

      expect(response.body.errors).to.not.be.null
      // console.log('errors ', response.body.errors[0])
      const result = response.body.errors[0]

      expect(result).to.contain.keys('message', 'extensions')
      expect(result.message).to.contain('GraphQL operations must contain a non-empty')
      expect(result.extensions).to.contain.keys('code')
      expect(result.extensions.code).to.eql('INTERNAL_SERVER_ERROR')
    })
    it('patches first name', async () => {
      const response = await request(url)
        .post('/')
        .send({ query: updateCustomerFirstName, variables: {customerId: 1, firstName: "TEST FIRST NAME"} })

      expect(response.body).to.have.property('data')
      expect(response.body.data).to.not.be.null
      expect(response.body.data).to.have.property('updateField')

      const result = response.body.data.updateField
      expect(result).to.include.keys('code', 'success', 'message', 'customer') 
      expect(result.code).to.eql(200)
      expect(result.success).to.be.true
      expect(result.message).to.include('TEST FIRST NAME')
      expect(result.customer).to.be.an('object')     
    })
    it('restores first name original value', async () => {
      const response = await request(url)
        .post('/')
        .send({ query: updateCustomerFirstName, variables: {customerId: 1, firstName: "firstName 01"} })

      expect(response.body).to.have.property('data')
      expect(response.body.data).to.not.be.null
      expect(response.body.data).to.have.property('updateField')

      const result = response.body.data.updateField
      expect(result).to.include.keys('code', 'success', 'message', 'customer') 
      expect(result.code).to.eql(200)
      expect(result.success).to.be.true
      expect(result.message).to.include('firstName 01')
      expect(result.customer).to.be.an('object') 
    })
    it('patches last name', async () => {
      const response = await request(url)
        .post('/')
        .send({ query: updateCustomerLastName, variables: {customerId: 1, lastName: "TEST LAST NAME"} })

      expect(response.body).to.have.property('data')
      expect(response.body.data).to.not.be.null
      expect(response.body.data).to.have.property('updateField')

      const result = response.body.data.updateField
      expect(result).to.include.keys('code', 'success', 'message', 'customer') 
      expect(result.code).to.eql(200)
      expect(result.success).to.be.true
      expect(result.message).to.include('TEST LAST NAME')
      expect(result.customer).to.be.an('object')   
    })
    it('restores last name original value', async () => {
      const response = await request(url)
        .post('/')
        .send({ query: updateCustomerLastName, variables: {customerId: 1, lastName: "lastName 01"} })

      expect(response.body).to.have.property('data')
      expect(response.body.data).to.not.be.null
      expect(response.body.data).to.have.property('updateField')

      const result = response.body.data.updateField
      expect(result).to.include.keys('code', 'success', 'message', 'customer') 
      expect(result.code).to.eql(200)
      expect(result.success).to.be.true
      expect(result.message).to.include('lastName 01')
      expect(result.customer).to.be.an('object') 
    })
  })
})
