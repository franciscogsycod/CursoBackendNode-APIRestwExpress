const express = require('express');
const app = express();
const port = 8080;

const routerAPI = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/errorHandler');

app.get('/', (request, response) => {
  response.send("Hola este es mi server en Express");
});

routerAPI(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi puerto esta en http://localhost:${port}`);
});
