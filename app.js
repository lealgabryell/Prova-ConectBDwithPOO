const express = require('express')
const mongoose = require('mongoose')
const app = express();
require("dotenv").config();
const emprestimoRoute = require('./src/routers/emprestimoRouter');
const livrosRoute = require('./src/routers/livroRouter')


app.use(express.json())
app.use("/emprestimos", emprestimoRoute);
app.use("/livros", livrosRoute);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connect to MongoDB");
    app.emit("ok");
  })
  .catch((error) => {
    console.log("Erro na conexao", error);
  });

app.on("ok", () => {
  app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado na porta ${process.env.PORT}!`);
  });
});