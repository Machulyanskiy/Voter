const express = require('express');
const router = express.Router();
const controller = require('../controllers/theme');

router.post('/', controller.create);
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/:id/yes', controller.up);
router.post('/:id/no', controller.down);
router.delete('/:id', controller.delete);

module.exports = router;