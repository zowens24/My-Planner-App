const Goal = require('../models/goal');

function index(req, res) {
    res.render('goals/index', {
        goals: Goal.getAll()
    });
}

function newGoal(req, res) {
    res.render('goals/new');
}

function create(req, res) {
    req.body.done = false;
    Goal.create(req.body);
    res.redirect('/goals');
}

module.exports = {
    new: newGoal,
    create,
    index
}