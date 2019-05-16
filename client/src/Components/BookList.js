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
  render() {
    console.log(this.props);
    return(
      <ul>
        <li>Book List</li>
      </ul>
    )
  }
}

export default graphql(getBooksQuery)(BookList);
