const ModeloTarefa = require("../model/ModeloTarefa");
const {
  startOfDay,
  endOfDay,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} = require("date-fns");

const currentDate = new Date();
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
    await ModeloTarefa.find({ macaddress: { $in: req.params.macaddress } })
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
    await ModeloTarefa.findByIdAndUpdate(
      { _id: req.params.id },
      { done: req.params.done },
      { new: true }
    )
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async lateTasks(req, res) {
    await ModeloTarefa.find({
      quando: { $lt: currentDate },
      macaddress: { $in: req.params.macaddress },
    })
      .sort("quando")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        console.log(error);
        return res.status(500).json(error);
      });
  }

  async todayTasks(req, res) {
    await ModeloTarefa.find({
      macaddress: { $in: req.params.macaddress },
      quando: { $gte: startOfDay(currentDate), $lt: endOfDay(currentDate) },
    })
      .sort("quando")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async weekTasks(req, res) {
    await ModeloTarefa.find({
      macaddress: { $in: req.params.macaddress },
      quando: { $gte: startOfWeek(currentDate), $lt: endOfWeek(currentDate) },
    })
      .sort("quando")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async monthTasks(req, res) {
    console.log(currentDate);
    await ModeloTarefa.find({
      macaddress: { $in: req.params.macaddress },
      quando: { $gte: startOfMonth(currentDate), $lt: endOfMonth(currentDate) },
    })
      .sort("quando")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }

  async yearTasks(req, res) {
    await ModeloTarefa.find({
      macaddress: { $in: req.params.macaddress },
      quando: { $gte: startOfYear(currentDate), $lt: endOfYear(currentDate) },
    })
      .sort("quando")
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(500).json(error);
      });
  }
}

module.exports = new TarefaController();
