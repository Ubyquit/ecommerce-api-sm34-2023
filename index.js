const express = require("express");
const cors = require("cors");

const routerCategorias = require("./router/routerCategorias");

const app = express();

app.use(cors());

app.use(express.json());

app.get("/", (req, res) => {
  res.send("<h1>Hola mundo</h1>");
});

app.use('/categorias', routerCategorias);

app.listen(3001, () => {
  console.log("API escuchando por el puerto 3001");
});
