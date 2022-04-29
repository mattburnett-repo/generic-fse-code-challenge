
const { gql } = require('apollo-server');

// Apollo GL doesn't look like it supports Date data type natively
//    try the solution from this link: https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
// const { GraphQLScalarType, Kind } = require('graphql');  // FIXME: dateScalar. can't figure this out

const typeDefs = gql`
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
    updateField(customerId: Int, firstName: String, lastName: String, policyId: Int, policyNumber: String): updateFieldResponse!
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

  # Date is a custom scalar datatype thing
  #   https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
  scalar Date
  
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

//  https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
//    https://www.apollographql.com/docs/apollo-server/schema/custom-scalars#example-the-date-scalar
//    also, add ': any' to value args 
//      (https://stackoverflow.com/questions/47848778/parameter-implicitly-has-an-any-type/56826668#56826668)
//      not sure this is the best solution. but it at least lets us compile
// const dateScalar = new GraphQLScalarType({
//   name: 'Date',
//   description: 'Date custom scalar type',
//   serialize(value: any) {
//     return value.getTime(); // Convert outgoing Date to integer for JSON
//   },
//   parseValue(value: any) {
//     return new Date(value); // Convert incoming integer to Date
//   },
//   parseLiteral(ast: any) {
//     if (ast.kind === Kind.INT) {
//       return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
//     }
//     return null; // Invalid hard-coded value (not an integer)
//   },
// });

module.exports = {
  typeDefs,
  // dateScalar
};
