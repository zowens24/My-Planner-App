const express = require('express');
const router = express.Router();
const Goal = require('../models/goal');
router.get('/', function(req, res) {
    res.render('goals/index', {
        goals: Goal.getAll()
    });
})

module.exports = router;