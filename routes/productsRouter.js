const express = require('express');
const faker = require('faker');
const router = express.Router();
const port = 8080;

router.get('/', (request, response) => {
  const products = [];

  const {limit, offset} = request.query;
  const sizeArray = limit || 10;

  for(let i = 0; i < sizeArray; i++){
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl()
    })
  }
  response.json(products)
});

router.post('/', (request, response) => {
  const body = request.body;
  response.status(201).json({
    message: "product created",
    data: body
  })
});

router.patch('/:id', (request, response) => {
  const {id} = request.params;
  const body = request.body;
  response.json({
    message: "product updated partially",
    data: body,
    id
  })
});

router.delete('/:id', (request, response) => {
  const {id} = request.params;
  response.json({
    message: "product deleted",
    id
  })
});

router.get('/filter', (request, response) => {
  response.send("Soy un filtro");
});

router.get('/products/query', (request, response) => {
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

router.get('/:id', (request, response) => {
  const {id} = request.params;
  request.json({
    id,
    name: 'Product 2',
    price: 2000
  });
});

module.exports = router;
