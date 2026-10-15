const express = require("express");
const path = require("node:path");

const app = express();
const port = Number(process.env.PORT) || 3000;

app.get("/", (_request, response) => {
  response.sendFile(path.join(__dirname, "index.html"));
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor listo en el puerto ${port}`);
});
