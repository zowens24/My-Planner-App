// require the modules(mongoose)
const mongoose = require('mongoose');
// create a shortcut variable
const Schema = mongoose.Schema;
// define the todoSchema
const todoSchema = new Schema({
    todo: String,
    time: String
}, { timestamps: true});
// export the result of compiling the schema with mongoose.Model
module.exports = mongoose.model('Todo', todoSchema);

// module.exports = {
//     getAll,
//     create
//    };
   
//    const todos = [
//     {text: 'Feed Dogs', done: true},
//     {text: 'Learn Express', done: false},
//     {text: 'Buy Milk', done: false}
//    ];
   
//    function getAll() {
//     return todos;
//    }
   
//    function create(todo) {
//        todos.push(todo);
//    }