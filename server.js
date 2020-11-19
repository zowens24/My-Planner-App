// require modules
const express = require('express');
const indexRouter = require('./routes/index');
const todosRouter = require('./routes/todos');
const goalsRouter = require('./routes/goals');
const journalsRouter = require('./routes/journals');
const reflectionsRouter = require('./routes/reflections');
const morgan = require('morgan');
const port = process.env.PORT || 3000;
// create express app
const app = express();

// configure app(app.set)
app.set('view engine', 'ejs');

// mount middleware(app.use)
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
// mount routes
app.use('/', indexRouter);
app.use('/todos', todosRouter);
app.use('/goals', goalsRouter);
app.use('/journals', journalsRouter);
app.use('/reflections', reflectionsRouter);

// tell app to listen
app.listen(port, function() {
    console.log(`express is listening on port: ${port}`);
})