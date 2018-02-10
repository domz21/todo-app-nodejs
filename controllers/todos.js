const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Todo = require('../models/todo-model');

mongoose.connect('mongodb://domz:test@ds229388.mlab.com:29388/todo-list');

const urlencodedParser = bodyParser.urlencoded({extended: true});

const todoController = (app) => {
  app.get('/todo', (req, res) => {
    Todo.find({}, (err, data) => {
      if(err) throw err;
      res.render('todo', {todos: data});
    });
  });

  app.post('/todo', urlencodedParser, (req, res) => {
    const newTodo = Todo(req.body).save((err, data) => {
      if(err) throw err;
      //res.json(data);
      res.redirect('/todo');
    });
  });

  app.delete('/todo/:item', (req, res) => {
    Todo.find({item: req.params.item.replace(/\-/g, " ")}).remove((err,data) => {
      if(err) throw err;
      res.json(data);
      //res.redirect('/todo');
    });
  });
}





module.exports = { todoController };
