import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { ApolloProvider } from 'react-apollo';
import apolloClient from './services/apolloClient.js'
import gql from 'graphql-tag';

apolloClient.query({ query: gql`query { artworks { id, title } }` }).then(console.log);

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)

registerServiceWorker();
