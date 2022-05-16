
# Generic Fullstack Engineer code challenge

This repo is for an ongoing, generic personal project. It contains [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend)  and [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) code for a generic FSE code challenge. 

It uses React to connect to an ApolloGraphQL server. The ApolloGraphQL server connects to a remote REST API datastore.

Data is pulled from the datastore, through ApolloGraphQL and then displayed to the user as a React UI.

* The repo for the [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend)
* The repo for the [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend)
* The repo for the [datastore](https://github.com/mattburnett-repo/feather-fullstack-codechallenge-datastore)
* The [datastore API / documentation](https://feather-datastore.herokuapp.com/api/v1/api-docs/)
* Docker containers for the frontend and backend are available [here](https://hub.docker.com/u/mattburnett01)
## Technology used
* Frontend
  * React
  * React-Table
  * React-Date-Picker
  * Apollo graphQL Client
  * Tailwind CSS
  * Jest / React Testing Library
* Backend
  * ApolloGL Server / datasource-rest
  * Mocha / Supertest / Chai

## Getting Started / installation from the repos
* Instructions are provided in the Readme files for [frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend) and [backend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/backend) repos
  
## Getting Started / Docker containers
* You can run Docker containers for the frontend and the backend. Instructions are in the respective Readme.md files
* You can also try a docker-compose build from the project root directory:
```bash
docker-compose up -d
```
and then running
```bash
localhost:3000/
```
in a browser window
* Stop the Docker containers with:
```bash
docker-compose down
```

## To Do
* Authentication / Authorization
* More modules (ie. navigation, policy detail, customer detail)
* Retrofit with TypeScript
* Deploy Docker containers
