
# Generic FSE Code Challenge: Front End

This is the front end part of the [Generic FSE code challenge](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/).

It uses React to connect to an ApolloGraphQL server. The ApolloGraphQL server connects to a remote REST API datastore.

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI.

* The repo for the [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://feather-datastore.herokuapp.com/api/v1/api-docs/)

## Technology used
* React
* React-Table
* React-Date-Picker
* Apollo graphQL Client
* Tailwind
* React Testing Library
  
## Getting started

Install the dependencies:

```bash
npm install
```

And run the development server:

```bash
npm start
```

Tailwind builds can be run in watch mode by 
```bash
npm run build:css
```

## Environment Variables
You will need these environment variables: 
```bash
REACT_APP_APOLLO_URI= // url to the ApolloGL server instance goes here
```
## Testing
Test/s are located in 
```bash
src/__tests__
```

Test/s can be run by
```bash
npm test
```

## To Do
* Authentication
* More modules (ie. navigation, policy detail, customer detail)
* Docker deployment
* More TypeScript
* Better testing of date-picker component integration