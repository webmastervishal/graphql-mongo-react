const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/gql-webmaster');
mongoose.connection.once('open',() => {
  console.log('Connected to DB');
});

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(8000,() => {
  console.log('Running on port 8000...');
});
