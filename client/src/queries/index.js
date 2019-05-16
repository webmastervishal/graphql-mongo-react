import {gql} from 'apollo-boost';

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

const getAuthorsQuery = gql`
  {
    authors{
      id
      name
    }
  }
`;

const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorid: ID!){
    addBook(name: $name,genre:$genre, authorid: $authorid){
      id
      name
    }
  }
`;

export {
  getBooksQuery,
  getAuthorsQuery,
  addBookMutation
}
