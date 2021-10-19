const express = require('express');
//const faker = require('faker');
const app = express();
const port = 8080;

app.get('/', (request, response) => {
  response.send("Hola este es mi server en Express");
});

app.get('/products', (request, response) => {
  response.send([
    {
      id: 1,
      name: 'Celular',
      price: 14000
    },
    {
      id: 2,
      name: 'Audífonos',
      price: 2300
    },
    {
      id: 3,
      name: 'Cargador',
      price: 500
    }
  ]);
});

app.get('/products/query', (request, response) => {
  const { limit, offset } = request.query;
  if(limit && offset) {           // /query?limit=100&offset=200
    response.json({
      limit,
      offset
    });
  } else {
    response.send("No hay parámetros");
  }
});

app.get('/products/:id', (request, response) => {
  const product = request.params;
  response.json(product);
});

app.listen(port, () => {
  console.log(`Mi puerto esta en http://localhost:${port}/products/query`);
});

