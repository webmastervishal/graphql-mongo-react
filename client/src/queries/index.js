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
  mutation {
    addBook(name: "",genre: "", authorid: ""){
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
