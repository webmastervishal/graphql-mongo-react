const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schemas
const bookSchema = new Schema({
  name: String,
  genre: String,
  authorid: String
});

//create model
const bookModel = mongoose.model('Book',bookSchema);

//export model
module.exports = bookModel;
