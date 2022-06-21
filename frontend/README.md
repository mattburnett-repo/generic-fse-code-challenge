
# Generic FSE Code Challenge: Front End

This is the front end part of the [Generic FSE code challenge](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/).

It uses React to connect to an ApolloGraphQL server. The ApolloGraphQL server connects to a remote REST API datastore.

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI.

* The repo for the [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://feather-datastore.herokuapp.com/api/v1/api-docs/)

* You can also pull and run the [Docker image](https://hub.docker.com/r/mattburnett01/generic-code-challenge-frontend)
  * You will need a Docker network and the Docker image for the backend. Instructions are [here](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) 

* This project uses [AuthServer](https://github.com/mattburnett-repo/authServer) to handle basic authentication. Authentication data / processing is kept separate from application data.

## Technology used
* React
  * React-Table
  * React-Date-Picker
  * React Router Dom version 5
    * auth/jwt code depends on version 5
  * Hooks
    * useState
    * useEffect
    * useContext
    * useRef
    * forwardRef / useImperativeHandle
  * @react-oauth/google
* Apollo graphQL Client
* Axios
* Tailwind
* React Testing Library
* [AuthServer](https://github.com/mattburnett-repo/authServer)
  
## Getting Started / Installing from the repo
Install the dependencies:

```bash
npm install
```

Start AuthServer
```bash
cd authServer
npm start
```
Start Backend
```bash
cd backend
npm start
```
Start Frontend

```bash
cd frontend
npm start
```

Tailwind builds can be run in watch mode by 
```bash
npm run build:css
```
You will need environment vars. There is a [.sample-env file](./.sample-env) in the root of this repo you can use to get started.

## Getting Started / Docker
A Docker container of this repo can be found [here](https://hub.docker.com/repository/docker/mattburnett01/generic-fse-frontend). It has instructions for use.

You should start the authServer container before running the frontend container. Instructions are [here](https://hub.docker.com/repository/docker/mattburnett01/generic-fse-authserver)

You should start the backend container before running the frontend container.  Instructions are [here](https://hub.docker.com/repository/docker/mattburnett01/generic-fse-backend)

## Testing
Test/s are located in 
```bash
src/__tests__
```

Test/s can be run by
```bash
npm test
```

Tests of only the Admin module
```bash
npm run test:admin
```

Tests of only the Customers module
```bash
npm run test:customer
```

Test of only the Policy module
```bash
npm run test:policy
```

## To Do
* More TypeScript
* Better testing of date-picker component integration