# Frontend

This is the frontend part of the [Junior Fullstack Engineer code challenge](../Readme.md).

## Getting started

Install the dependencies:

```bash
yarn install
```

And run the development server:

```bash
yarn start
```

## Technology used
* React
* React-table
* Apollo graphQL Client
* Tailwind
* React Testing Library

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
npm run test
```

## Dev Notes
* installed react-table to add sort / pagination / inline edintg to policy table
* tailwind install as specified in package.json (autoprefixer / postcss / npm:@tailwindcss/postcss7-compat) doesn't work when building
  * requires postcss 8
    * all advices I could find on the web don't work
      * they all point to the solution already in the repo (autoprefixer / postcss / npm:@tailwindcss/postcss7-compat)
  * uninstalled autoprefixer / postcss / npm:@tailwindcss/postcss7-compat and reinstalled tailwindcss as dev dependency
    * installed as tailwind 3.0.23
  * needed to add 'content' key to tailwind.config.js (https://tailwindcss.com/docs/content-configuration) to get a clean build
  * build script (npx tailwindcss -i src/index.css -o dist/style.css --watch) now works
  * during npm start (craco start) somehow a problem with webpack arose
    * the error message suggested the "delete node_modules and reinstall" solution.
    * deleted / reinstalled node_modules, but now there's a problem with index.tsx
      * it can't find react and react-dom. 
        * File '/feather/fullstack-engineer-challenge/frontend/node_modules/@types/react/index.d.ts' is not a module.
        * File '/feather/fullstack-engineer-challenge/frontend/node_modules/@types/react-dom/index.d.ts' is not a module.
    * npm start reverts to the postcss 8 problem and fails
    * Time.To.Stop.The.Bleeding
      * changed start script in package.json to use react-script instead of craco
        * now npm start works again
        * tailwind build run successfully
* I would like to implement Dirty Swan components, but don't have enough time
  * It looks like DS works as a Tailwind 'library'
* In-place field editing
  * Was able to figure out how to get react-table to create in-place editable fields, however I ran into problems implementing data updates
    * Don't know how to get ApolloGL to accept the edit and then update the datastore
    * HTTP PATCH, instead of PUT, is best-suited for this, but I can't find any helpful advice online for how to do this
* Testing
  * The only component that actually does anything in response to a user is components/table.js 

## TO DO
* Implement data return trip from UI to Apollo to datastore