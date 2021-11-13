const express = require("express");
const cors = require("cors");
const server = express();

server.use(cors());
server.use(express.json());

const rotaTarefa = require("./routes/RotasTarefa");

server.use('/task', rotaTarefa);

server.listen(4000, () => {
  console.log("API online");
});
