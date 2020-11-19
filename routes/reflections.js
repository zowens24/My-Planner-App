const express = require('express');
const router = express.Router();
const reflectionsCtrl = require('../controllers/reflections');

router.get('/', reflectionsCtrl.index)
router.get('/new', reflectionsCtrl.new);
router.post('/', reflectionsCtrl.create);

module.exports = router;