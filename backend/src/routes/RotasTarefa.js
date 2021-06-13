const express = require('express');
const router = express.Router();
const controllerTarefa = require('../controller/TarefaController')

const ValidacaoTarefa = require('../middlewares/ValidacaoTarefa')

router.post('/', ValidacaoTarefa, controllerTarefa.create);


module.exports = router;