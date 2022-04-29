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
And run the development server:

```bash
npm run dev
```

## Dev Notes
---
* ApolloGL has no default Date datatype. Here is a fix: 
  * https://www.apollographql.com/docs/apollo-server/schema/custom-scalars/
  * Can't figure out how to use this. Need help with this.
* Initial testing results in empty objects being returned. This is probably a simple issue to fix, but I need help with this.
---

## TO DO
* Resolve the date / dateScalar issue
* Fix the 'empty object' issue in Backend.test.js
