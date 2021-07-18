const express = require('express');
const router = express.Router();
const controllerTarefa = require('../controller/TarefaController');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

const ValidacaoTarefa = require('../middlewares/ValidacaoTarefa')

router.post('/', ValidacaoTarefa, controllerTarefa.create);

router.put('/:id', ValidacaoTarefa,controllerTarefa.update)

router.get('/filter/all', MacaddressValidation,controllerTarefa.getAllTasks)


module.exports = router;