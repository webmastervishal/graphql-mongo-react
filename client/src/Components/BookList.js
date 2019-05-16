import React from 'react';
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const getBooksQuery = gql`
  {
    books{
      id
      name
      author {
        age
        name
      }
    }
  }
`;

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
    console.log(this.props);
    return(
      <ul>
        {this.displayBooks()}
      </ul>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
