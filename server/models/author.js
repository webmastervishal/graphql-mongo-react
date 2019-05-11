const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schemas
const authorSchema = new Schema({
  name: String,
  age: Number
});

//create model
const authorModel = mongoose.model('Author',authorSchema);

//export model
module.exports = authorModel;
