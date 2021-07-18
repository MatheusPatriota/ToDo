const express = require('express');
const router = express.Router();
const controllerTarefa = require('../controller/TarefaController');
const MacaddressValidation = require('../middlewares/MacaddressValidation');

const ValidacaoTarefa = require('../middlewares/ValidacaoTarefa')

router.post('/', ValidacaoTarefa, controllerTarefa.create);

router.put('/:id', ValidacaoTarefa,controllerTarefa.update)

router.get('/filter/all', MacaddressValidation,controllerTarefa.getAllTasks)

router.get('/:id', controllerTarefa.getTask);

router.delete('/:id', controllerTarefa.deleteTask)

router.put('/:id/:done', controllerTarefa.taskDone)
module.exports = router;