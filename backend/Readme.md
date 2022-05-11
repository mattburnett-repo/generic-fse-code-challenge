
# Generic FSE Code Challenge: Back End

This is the back end part of the [Generic Fullstack Engineer code challenge](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/)

It uses React to connect to an ApolloGraphQL server. The ApolloGraphQL server connects to a remote REST API datastore.

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI

* The repo for the [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://feather-datastore.herokuapp.com/api/v1/api-docs/)

## Technology used
* REST API
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

## To Do
* Authentication
* More modules (ie. navigation, policy detail, customer detail)
* Docker deployment
* More TypeScript
