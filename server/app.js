const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

mongoose.connect('mongodb://localhost:27017/gql-webmaster',{useNewUrlParser: true});
mongoose.connection.once('open',() => {
  console.log('Connected to DB');
});

app.use('/api',graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(8000,() => {
  console.log('Running on port 8000...');
});
