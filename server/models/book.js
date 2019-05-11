const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create a schemas
const bookSchema = new Schema({
  name: String,
  genre: String
});

//create model
const bookModel = mongoose.model('Book',bookSchema);

//export model
module.export = bookModel;
