import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:8000/api'
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <h1>Book Store</h1>
        <BookList/>
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
