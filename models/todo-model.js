const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema({
  item: String
});

const Todo = mongoose.model('todo', todoSchema);

module.exports = Todo;
