import React from 'react';
import {graphql} from 'react-apollo';

import {getBooksQuery} from './../queries';

class BookList extends React.Component {

  displayBooks() {
    const {data} = this.props;
    if(data.loading)
      return <p>Loading...</p>;
    else {
      return data.books.map(book => <li key={book.id}>{book.name} - {book.author.name}</li>);
    }
  }

  render() {
    return(
      <ul>
        {this.displayBooks()}
      </ul>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
