// require modules
const express = require('express');
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');

// create express app
const app = express();

// configure app(app.set)
app.set('view engine', 'ejs');

// mount middleware(app.use)

// mount routes
app.use('/', indexRouter);
app.use('/todos', todosRouter);

// tell app to listen
app.listen(3000, function() {
    console.log('express is listening');
})