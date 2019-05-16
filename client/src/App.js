import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './Components/BookList';

const client = new ApolloClient({
  uri: 'http://localhost:8000/api'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Graphql React Tutorial</h1>
        <BookList/>
      </div>
    </ApolloProvider>
  );
}

export default App;
