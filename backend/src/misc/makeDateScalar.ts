
// Apollo GL doesn't look like it supports Date data type natively

import { KindEnum } from "graphql";

//    try the solution from this link: https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
const { GraphQLScalarType, Kind } = require('graphql'); 

//  https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
//    also, add ': any' to value args 
//      (https://stackoverflow.com/questions/47848778/parameter-implicitly-has-an-any-type/56826668#56826668)
//      not sure this is the best solution. but it at least lets us compile

// https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/#example-the-date-scalar --->
const dateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value: any) {
    return value.getTime(); // Convert outgoing Date to integer for JSON
  },
  parseValue(value: number) {
    return new Date(value); // Convert incoming integer to Date
  },
  parseLiteral(ast: any) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value, 10)); // Convert hard-coded AST string to integer and then to Date
    }
    return null; // Invalid hard-coded value (not an integer)
  },
});

module.exports = dateScalar;