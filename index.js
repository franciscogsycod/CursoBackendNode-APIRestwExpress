const express = require('express');
const app = express();
const routerAPI = require('./routes');
const port = 8080;

routerAPI(app);

app.get('/', (request, response) => {
  response.send("Hola este es mi server en Express");
});

app.listen(port, () => {
  console.log(`Mi puerto esta en http://localhost:${port}`);
});
