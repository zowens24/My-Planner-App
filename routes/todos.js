const express = require('express');
const router = express.Router();
const todosCtrl = require('../controllers/todos');

router.get('/', todosCtrl.index);
router.get('/new', todosCtrl.new)
router.delete('/:id', todosCtrl.delete)
router.put('/:id/', todosCtrl.update);
router.post('/', todosCtrl.create);
router.get('/:id/edit', todosCtrl.edit);

module.exports = router;