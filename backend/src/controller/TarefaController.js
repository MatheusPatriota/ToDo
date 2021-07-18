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

  async update(req, res){
    await ModeloTarefa.findByIdAndUpdate({'_id': req.params.id}, req.body, {new: true })
    .then((response) => {
      return res.status(200).json(response);
    })
    .catch((error) => {
      return res.status(500).json(error);
    })
  }

  async 
}

module.exports = new TarefaController();
