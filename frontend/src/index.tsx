import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ApolloClient, InMemoryCache, ApolloProvider, gql, createHttpLink } from '@apollo/client';

const customFetch = (uri:string, options:any) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status >= 500) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};

const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost:4000/graphql",
    fetch: customFetch,
  }),
  cache: new InMemoryCache()
});

/*
client.query({
  query: gql`
    query Country {
      countries {
        _id
        country
        continent
        dish
      }
    }
  `,
})
  .then(data => console.log(data))
  .catch(error => console.error(error));*/

ReactDOM.render(
    <ApolloProvider client={client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

