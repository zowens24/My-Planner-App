
const Journal = require('../models/journal');
function index(req, res) {
    res.render('journals/index', {
        journals: Journal.getAll()
    });
}
function newJournal(req, res) {
    res.render('journals/new');
}

function create(req, res) {
    Journal.create(req.body);
    res.redirect('/journals');
}

module.exports = {
    new: newJournal,
    create,
    index
}