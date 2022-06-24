
![repo header](public/main-banner.jpeg?raw=true "Generic FSE Code Challenge")

# Generic Full Stack Engineer Code Challenge

This repo is for an ongoing personal project. It contains [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend), [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) and [authServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/authServer)  code for a generic FSE code challenge. 

It uses React (Frontend) to connect to an ApolloGraphQL server (Backend). The ApolloGraphQL server connects to a [remote REST API datastore](https://generic-fse-datastore.herokuapp.com/api/v1/api-docs/).

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI.

Basic authentication is handled by [AuthServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/authServer). Authentication is handled separately from application data.

* The repo for the [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend)
* The repo for the [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://generic-fse-datastore.herokuapp.com/api/v1/api-docs/)
* Docker containers for the frontend, backend and authServer are available [here](https://hub.docker.com/u/mattburnett01)
* The repo for [AuthServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/authServer)
  
* There is a test deployment on [Google Cloud Run](https://generic-fse-frontend-3g7bisuwsq-ey.a.run.app/). 
  * authServer has CORS issues that I need to figure out and resolve.
    * Usernane Login / Registration are affected by this CORS issue
  * You can log into the app using Google / GitHub OAuth to get a sense of what the app looks like.
  
## Technology used
* Authentication
  * [AuthServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/authServer)
  * @react-oauth/google (in [Frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend))
  * react-login-github (in [Frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend))
  * MongoDB / Mongoose
* Frontend
  * React
  * React-Table
  * React-Date-Picker
  * react-flash-message
  * Apollo graphQL Client
  * Tailwind CSS
  * Jest / React Testing Library
* Backend
  * ApolloGL Server / datasource-rest
  *  [Datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
       * PostgreSQL
       * Node JS / Express / Swagger/OpenAPI
  * Mocha / Supertest / Chai

## Getting Started 

### Installation from the repos
* Instructions are provided in the README files for [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend), [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) and [AuthServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/authServer) repos
  
### Docker containers
* Clone the repo and create the .env files for [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/blob/main/frontend/.sample-env), [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/blob/main/backend/.sample-env) and [authServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/blob/main/authServer/.sample-env).
  
* You can run Docker containers for the [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend#getting-started--docker), the [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend#getting-started--docker) and the [authServer](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/authServer#getting-started--docker). Instructions are in the respective README.md files
  
* You can also run a docker-compose build from the project root directory, after you create the .env files for each container:
  ```bash
  docker-compose -p generic-fse up -d
  ```
  and then run
  ```bash
  localhost:3000/
  ```
  in a browser window
  
  Stop the Docker containers with:
  ```bash
  docker-compose down
  ```

## Tests
* Tests for [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend/src/__tests__) and [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend/test)  are located in their respective repositories

## To Do
* Google Cloud Deployment
  * Resolve CORS issue with authServer
  * Develop CI/CD workflow as a separate effort / sandbox (similar to [authSandbox](https://github.com/mattburnett-repo/authSandbox))
* Logging
* Expire the auth token / localStorage ...
  * Combine with 'Remember Me' functionality
* Browse / Search
* More TypeScript
* Refinements to JWT authorization
  * Add authLevel to token
  * Check authLevel within the app, for module-level access
* Investigate / resolve data caching
  * React Table keeps a memoized copy of the data
  * Apollo QL keeps a cache of data
    * use the Apollo QL version