const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.render('index', {
        myName: 'Zoë'
    });
    
})


module.exports = router;

