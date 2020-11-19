const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new)
router.post('/', todosCtrl.create);

module.exports = router;