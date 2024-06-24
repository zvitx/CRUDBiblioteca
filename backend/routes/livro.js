const express = require('express');
const router = express.Router();
const LivroController = require('../controllers/livroController');

router.get('/', LivroController.getAll);
router.get('/:id', LivroController.getById);
router.post('/', LivroController.create);
router.put('/:id', LivroController.update);
router.delete('/:id', LivroController.delete);

module.exports = router;