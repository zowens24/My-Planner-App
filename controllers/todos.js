const Todo = require('../models/todo');

function index(req, res) {
    Todo.find({}, function(err, todos) {
        res.render('todos/index', {
            todos
        });
    })
}

function newTodo(req, res) {
    res.render('todos/new')
}

function create(req, res) {
    // req.body === {text:'mow the lawn'}
    //req.body.done = false;
    // req.body === {text:'mow the lawn', done: false}
    Todo.create(req.body, function(err, todo) {
        res.redirect('/todos')
    })
    
}
module.exports = {
    index,
    new: newTodo,
    create
}