
# Auth Server
This is a simple Node / Express server with no UI. Its purpose is to isolate authentication / authorization functionality from the rest of a web app.
  * It is based on the authSandbox repo, found [here](https://github.com/mattburnett-repo/authSandbox).
  * It uses Passport JS's flash messaging functionality, and assumes you have flash message consumption in your app.
  * Use it by cloning this repo into the root of your project.
  * The code handles signing up, logging in and logging out. That's it. Right now it uses Passport JS, but in the future it might also use auth0.

It return a JWT upon successful registration / login.

Users can register a new account.

Users can log in in two different ways:
* Basic Authentication (username / password)
* OAuth2
  * Google
  * GitHub

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
  * OAuth2
    * Google
    * GitHub
  * JWT
  
## Getting Started
After downloading / cloning the repo
```bash
npm install
```
You will need environment vars
```bash
AUTH_PORT=something.like.4500
SESSION_SECRET=put.your.session.secret.string.here
MONGO_CONNECTION_STRING=put.your.mongo.connection.string.here (eg: mongodb://localhost:27017)
AUTH_DATABASE_NAME=typcially.this.should.be.your.apps.name authService
COOKIE_MAX_AGE=in.total.milliseconds (eg: 1200000 = 20 mins.)

GOOGLE_CLIENT_ID=get.this.from.console.cloud.google.com
GOOGLE_CLIENT_SECRET=get.this.from.console.cloud.google.com
GOOGLE_REDIRECT_URL=something.like.http://localhost:4000/auth/google/redirect

GITHUB_CLIENT_ID=get.this.from.https://github.com/settings/application
GITHUB_CLIENT_SECRET=get.this.from.https://github.com/settings/application
GITHUB_REDIRECT_URL=something.like./auth/oauth/github/callback

JWT_TOKEN_SECRET=you.can.use.node.REPL.then.require('crypto').randomBytes(64).toString('hex') to make this
```
Run the server
```bash
npm start
```
Once everything is installed and running, you can send your app's auth-related requests to this server.

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
  * NPM package
