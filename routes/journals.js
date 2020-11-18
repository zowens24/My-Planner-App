const express = require('express');
const router = express.Router();
const Journal = require('../models/journal');
router.get('/', function(req, res) {
    res.render('journals/index', {
        journals: Journal.getAll()
    });
})

module.exports = router;