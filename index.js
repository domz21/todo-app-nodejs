const express = require('express');
const todos = require('./controllers/todos');

//init http
const app = express();

//template engine
app.set('view engine', 'ejs');

//for static files
app.use('/', express.static('assets'));

//controllers
todos.todoController(app);

//launch on port 3000
app.listen(3000);
console.log('App listening on port 3000');
