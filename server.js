// require modules
const express = require('express');
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const goalsRouter = require('./routes/goals');
const journalsRouter = require('./routes/journals');
const reflectionsRouter = require('./routes/reflections');
// create express app
const app = express();

// configure app(app.set)
app.set('view engine', 'ejs');

// mount middleware(app.use)

// mount routes
app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/goals', goalsRouter);
app.use('/journals', journalsRouter);
app.use('/reflections', reflectionsRouter);

// tell app to listen
app.listen(3000, function() {
    console.log('express is listening');
})