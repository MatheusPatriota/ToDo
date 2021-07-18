const ModeloTarefa = require("../model/ModeloTarefa");
const { isPast } = require("date-fns");
const ValidacaoTarefa = async (req, res, next) => {
  const { macaddress, tipo, titulo, descricao, quando } = req.body;

  if (!macaddress)
    return res.status(400).json({ error: "MacAddress é obrigatório" });
  else if (!tipo) return res.status(400).json({ error: "Tipo é obrigatório" });
  else if (!titulo)
    return res.status(400).json({ error: "Título é obrigatório" });
  else if (!descricao)
    return res.status(400).json({ error: "Descrição é obrigatória" });
  else if (!quando)
    return res.status(400).json({ error: "Data e Hora são obrigatórios" });
  else if (isPast(new Date(quando)))
    return res.status(400).json({
      error: "Data e Hora Não podem ser cadastradas Antes da data Atual",
    });
  else {
    let exists;
    if (req.params.id) {
      exists = await ModeloTarefa.findOne({
        _id: { $ne: req.params.id },
        quando: { $eq: new Date(quando) },
        macaddress: { $in: macaddress },
      });
    } else {
      exists = await ModeloTarefa.findOne({
        quando: { $eq: new Date(quando) },
        macaddress: { $in: macaddress },
      });
    }

    if (exists) {
      return res
        .status(400)
        .json({
          error: "Já existe uma tarefa cadastrada nessa data e horário",
        });
    }
    next();
  }
};

module.exports = ValidacaoTarefa;
