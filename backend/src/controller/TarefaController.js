const ModeloTarefa = require("../model/ModeloTarefa");

class TarefaController {
  async create(req, res) {
    const tarefa = new ModeloTarefa(req.body);
    await tarefa
      .save()
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new TarefaController();
