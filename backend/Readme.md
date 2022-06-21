
# Generic FSE Code Challenge: Back End

This is the back end part of the [Generic Fullstack Engineer code challenge](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/)

It uses React to connect to an ApolloGraphQL server. The ApolloGraphQL server connects to a remote REST API datastore.

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI

* The repo for the [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://feather-datastore.herokuapp.com/api/v1/api-docs/)

* You can also pull and run the [Docker image](https://hub.docker.com/r/mattburnett01/generic-code-challenge-backend)

## Technology used
* REST API
* ApolloGL Server / datasource-rest
* Mocha / SuperTest / Chai
  
## Getting Started / Installing from the repo
```bash
npm install
```
You will need environment vars. There is a [.sample-env file](./.sample-env) in the root of this repo you can use to get started.

To run the development server:

```bash
npm run dev
```

## Getting Started / Docker
A Docker container of this repo can be found [here](https://hub.docker.com/repository/docker/mattburnett01/generic-fse-backend). It has instructions for use.

## Testing
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
* More TypeScript
