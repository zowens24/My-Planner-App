const Todo = require('../models/todo');

function index(req, res) {
    res.render('todos/index', {
        todos: Todo.getAll()
    });
}

function newTodo(req, res) {
    res.render('todos/new')
}

function create(req, res) {
    // req.body === {text:'mow the lawn'}
    //req.body.done = false;
    // req.body === {text:'mow the lawn', done: false}
    
    Todo.create(req.body);
    res.redirect('/todos');
}
module.exports = {
    index,
    new: newTodo,
    create
}