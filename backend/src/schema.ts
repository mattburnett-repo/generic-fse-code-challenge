
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
    "Updates specified fields in a record. Record to update is determined by providing either policyId or customerId. Valid specified fields are firstName / lastName / policyNumber. Use only one specified field at a time."
    updateField(customerId: Int, firstName: String, lastName: String, dateOfBirth: Date, policyId: Int, policyNumber: String): updateFieldResponse!
  }
  type updateFieldResponse {
    "Similar to HTTP status code, represents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated policy after a successful mutation"
    policy: Policy
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
