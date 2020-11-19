const Reflection = require('../models/reflection');

function index(req, res) {
    res.render('reflections/index', {
        reflections: Reflection.getAll()
    });
}
function newReflection(req, res) {
    res.render('reflections/new')
}

function create(req, res) {
    Reflection.create(req.body);
    res.redirect('/reflections');
}

module.exports = {
    index,
    new: newReflection,
    create
}