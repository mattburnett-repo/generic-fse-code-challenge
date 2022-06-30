
# Auth Server
This is a simple Node / Express server with no UI. Its purpose is to isolate authentication / authorization functionality from the rest of a web app.
  * It is based on the authSandbox repo, found [here](https://github.com/mattburnett-repo/authSandbox).
  * Use it by cloning this repo into the root of your project.
  * The code handles signing up, logging in and logging out. That's it. Right now it uses Passport JS, but in the future it might also use auth0.

It returns a JWT upon successful registration / login.

Users can register a new account with a username and password.

OAuth is handled in the [Frontend](https://github.com/mattburnett-repo/generic-fse-code-challenge/tree/main/frontend).

A MongoDB / Mongoose database is used to save user info, and to persist authentication / session info. You can use a different database if you want to, but you will need to change code in the routes.

## Technologies Used
* Node / Express
  * bcrypt
  * express-session
  * express flash messaging
  * jsonwebtoken
* MongoDB / Mongoose 
  * connect-mongo
  * mongoose-find-or-create
* Typescript
* Passport JS
  * Basic authentication
  * JWT
  
## Getting Started / Installing from the repo
After downloading / cloning the repo
```bash
npm install
```
You will need environment vars. There is a [.sample-env file](./.sample-env) in the root of this repo you can use to get started.

Run the server
```bash
npm start
```
Once everything is installed and running, you can send your app's auth-related requests to this server.

## Getting Started / Docker
A Docker container of this repo can be found [here](https://hub.docker.com/repository/docker/mattburnett01/generic-fse-authserver). It has instructions for use.

Use the [.sample-env file](./.sample-env) (rename to .env) for basic / default required vars

## Options
* Basic Local
  * Username / Password 
* OAuth2 
  * Google
  * GitHub
* auth0
  * still researching this
* JWT
  * For authorization / role / access level
  
## Known Issues
* Ssimultaneous OAuth2 authentication issue
  * Use Google, logout and the use GitHub
    * still logs in with Google
  
## To Do
* More Typescript
* Research / implement auth0
* Dockerize / Deploy
  * Netlify, et al.
  * Microservice / AWS
  * NPM package?
