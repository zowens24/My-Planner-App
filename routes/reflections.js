const express = require('express');
const router = express.Router();
const Reflection = require('../models/reflection');
router.get('/', function(req, res) {
    res.render('reflections/index', {
        reflections: Reflection.getAll()
    });
})

module.exports = router;