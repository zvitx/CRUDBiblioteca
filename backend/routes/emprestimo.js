const express = require('express');
const router = express.Router();
const EmprestimoController = require('../controllers/emprestimoController');

router.get('/', EmprestimoController.getAll);
router.post('/', EmprestimoController.create);
router.put('/:id/devolve', EmprestimoController.devolve);
router.get('/emprestados', EmprestimoController.getEmprestados);

module.exports = router;