# Backend

This is the backend part of the [Generic Fullstack Engineer code challenge](../Readme.md)

This code consumes data from a REST API. API doc can be viewed at 
* The repo for the datastore: https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore
* The datastore API / documentation: https://feather-api-v1.herokuapp.com/api/v1/api-docs/

## Technology used
* ApolloGL Server / datasource-rest
* Mocha / SuperTest / Chai
  
## Getting started

Install the dependencies:

```bash
npm install
```
You will need these environment variables: 
```bash
DATASTORE_BASE_URL=https://feather-api-v1.herokuapp.com/api/v1/
APOLLOQL_PORT=5000
```
To run the development server:

```bash
npm run dev
```

## Testing
---
Tests are located in /backend/test. They use Mocha, with the Chai 'expect' module.

The test to pull all policies from the data store ('retrieve policies') is pending / turned off using '.skip'. 
Remove '.skip' to run this particular test.
This is because there are a lot of policy records, and this often creates a problem with the data store,
specifically a 'DB connection refused' error.

You can run the tests in watch mode. Sometimes this causes a 'port already in use' error
```
npm test
```

You can run the tests once, then quit / exit / close server connection
```
npm run testOnce
```

## Dev Notes
---
* ApolloGL has no default Date datatype. Here is a fix: 
  * https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
  * Can't figure out how to use this. Need help with this.

## TO DO
---
* Resolve the date / dateScalar issue
  * https://stackoverflow.com/questions/59810960/how-can-i-define-date-data-type-in-graphql-schema
