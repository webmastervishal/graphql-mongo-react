const graphql = require('graphql');
const Author = require('../models/author');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList
} = graphql;

const books = [
    {id: '1',name: 'Harry Potter',genre: 'thrill', authorid: '1'},
    {id: '2',name: 'Marvels',genre: 'comics', authorid: '2'},
    {id: '3',name: '2 States',genre: 'autobiography', authorid: '1'}
];

const authors = [
  {id: '1',name: 'Vishal shetty',age : 28},
  {id: '2',name: 'Vijay Inagwale',age : 28}
];

const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    genre: {type: GraphQLString},
    author: {
      type: AuthorType,
      resolve(parent,args) {
        return authors.find((author) => author.id === parent.authorid );
      }
    }
  })
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    books: {
      type: new GraphQLList(BookType),
      resolve(parent,args) {
        return books.filter(book => book.authorid === parent.id);
      }
    }
  })
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQuery',
  fields: {
    book: {
      type: BookType,
      args: {id: {type: GraphQLID}},
      resolve(parent,args) {
        return books.find((book) => book.id === args.id);
      }
    },

    author: {
      type: AuthorType,
      args: {id: {type: GraphQLID}},
      resolve(parent,args) {
        return authors.find((author) => author.id === args.id);
      }
    },

    books: {
      type: new GraphQLList(BookType),
      resolve(parent,args) {
        return books;
      }
    },

    authors: {
      type: new GraphQLList(AuthorType),
      resolve(parent,args) {
        return authors;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addAuthor: {
      type: AuthorType,
      args: {
        name: {type: GraphQLString},
        age: {type: GraphQLInt}
      },
      resolve(parent,args) {
        let author = new Author({
          name: args.name,
          age: args.age
        });

        return author.save();
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});
