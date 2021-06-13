const express = require("express");
const server = express();

server.use(express.json());

const rotaTarefa = require("./routes/RotasTarefa");

server.use('/tarefa', rotaTarefa);

server.listen(3000, () => {
  console.log("API online");
});
