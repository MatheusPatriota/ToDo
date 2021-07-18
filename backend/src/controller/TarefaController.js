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

  async update(req, res) {
    await ModeloTarefa.findByIdAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
    })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async getAllTasks(req, res) {
    await ModeloTarefa.find({ macaddress: { $in: req.body.macaddress } })
      .sort("quando")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async getTask(req, res) {
    await ModeloTarefa.findById(req.params.id)
      .then((response) => {
        if (response) {
          return res.status(200).json(response);
        } else {
          return res.status(200).json({ error: "Tarefa Não encontrada!" });
        }
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async deleteTask(req, res) {
    await ModeloTarefa.deleteOne({ _id: req.params.id })
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
  async taskDone(req, res) {
    await ModeloTarefa.findByIdAndUpdate({ _id: req.params.id }, {done: req.params.done}, {new: true} )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

}


module.exports = new TarefaController();
