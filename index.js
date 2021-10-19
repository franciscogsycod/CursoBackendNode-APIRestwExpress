const express = require('express');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
  response.send("Hola este es mi server en Express");
});

app.get('/products', (request, response) => {
  response.send({
    id: 1,
    name: 'Celular',
    price: 14000
  });
});

app.listen(port, () => {
  console.log(`Mi puerto esta en ${port}`);
});

