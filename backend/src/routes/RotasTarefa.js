const express = require("express");
const router = express.Router();
const controllerTarefa = require("../controller/TarefaController");
const ValidacaoTarefa = require("../middlewares/ValidacaoTarefa");

router.get('/', (req,res) => {
  res.send('Bem vindo a nossa API')
})

router.post("/", ValidacaoTarefa, controllerTarefa.create);

router.put("/:id", ValidacaoTarefa, controllerTarefa.update);

router.get("/:id", controllerTarefa.getTask);

router.delete("/:id", controllerTarefa.deleteTask);

router.put("/:id/:done", controllerTarefa.taskDone);

router.get("/filter/all/:macaddress", controllerTarefa.getAllTasks);

router.get("/filter/late/:macaddress", controllerTarefa.lateTasks);

router.get("/filter/today/:macaddress", controllerTarefa.todayTasks);

router.get("/filter/week/:macaddress", controllerTarefa.weekTasks);

router.get("/filter/month/:macaddress", controllerTarefa.monthTasks);

router.get("/filter/year/:macaddress", controllerTarefa.yearTasks);

module.exports = router;
