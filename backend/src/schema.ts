
const { gql } = require('apollo-server');

const typeDefs = gql`
  # Date is a custom scalar datatype thing
  #   https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
  # 'Date' type is defined in './misc/makeDateScaler.ts'
  scalar Date

  type Query {
    "Query to get all policies"
    policies: [Policy!]!
    "Query to get insurance types"
    insuranceTypes: [InsuranceTypes!]!
    "Query to get policy statuses"
    policyStatuses: [PolicyStatus!]!
    "Query to get all providers"
    providers: [Provider!]!
    "Query to get all customers"
    customers: [Customer!]!
  }

  type Mutation {
    "Update fields in policy datastore."
    updatePolicy(policyId: Int, policyNumber: String): updatePolicyResponse!
  }
  type updatePolicyResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated customer after a successful mutation"
    policy: Policy!
  }

  type Mutation {
    "Update fields in customers datasource."
    updateCustomer(customerId: Int, firstName: String, lastName: String, dateOfBirth: Date): updateCustomerResponse!
  }
  type updateCustomerResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated customer after a successful mutation"
    customer: Customer
  }
  
  "Insurance policy"
  type Policy {
    id: ID!
    customer: Customer!
    provider: Provider!
    insuranceType: InsuranceTypes!
    status: PolicyStatus!
    policy_number: String!
    start_date: Date!
    end_date: Date!
    created_at: Date!
  }
  
  "Customer object"
  type Customer {
    id: ID!
    first_name: String!
    last_name: String!
    date_of_birth: Date!
  }
  
  "Provider object"
  type Provider {
    id: ID!
    prefix_code: String!
    description: String!
  }

  "Insurance Types"
  type InsuranceTypes {
    id: ID!
    description: String!
  }

  "Policy Status"
  type PolicyStatus {
    id: ID!
    description: String!
  }
`;

module.exports = {
  typeDefs
};
