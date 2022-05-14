
import ReactDOM from "react-dom";

import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

if(process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const client = new ApolloClient({
  uri: process.env.REACT_APP_APOLLO_URI, 
  cache: new InMemoryCache(),
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);
