
# Generic FSE Code Challenge: Front End

This is the front end part of the [Generic FSE code challenge](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/).

It uses React to connect to an ApolloGraphQL server. The ApolloGraphQL server connects to a remote REST API datastore.

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI.

* The repo for the [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://feather-datastore.herokuapp.com/api/v1/api-docs/)

* You can also pull and run the [Docker image](https://hub.docker.com/r/mattburnett01/generic-code-challenge-frontend)
  * You will need a Docker network and the Docker image for the backend. Instructions are [here](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) 

* This project uses [AuthServer](https://github.com/mattburnett-repo/authServer) to handle authentication. Authentication data / processing is kept separate from application data.

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
* Apollo graphQL Client
* Tailwind
* React Testing Library
* [AuthServer](https://github.com/mattburnett-repo/authServer)
  
## You can get started by either installing from the repo or pulling / running the Docker image
### Getting started / installing the dependencies from the repo:
Install the dependencies:

```bash
npm install
```

Start AuthServer
```bash
authServer/npm start
```

And run the development server

```bash
npm start
```

Tailwind builds can be run in watch mode by 
```bash
npm run build:css
```

You will need these environment variables: 
```bash
REACT_APP_APOLLO_URI=http://localhost:5000
```

### Getting started / pulling and running the Docker image
You should start the backend container before running the frontend container.  Instructions are [here](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) 

To pull the Docker image:
```bash
docker pull mattburnett01/generic-code-challenge-frontend
```
Then create a network (if you haven't already):
```bash
docker network create generic-code-challenge
```
Then run the container:
```bash
docker run -dp 3000:3000 --network generic-code-challenge --network-alias frontend -e REACT_APP_APOLLO_URI=http://localhost:5000 generic-code-challenge-frontend
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