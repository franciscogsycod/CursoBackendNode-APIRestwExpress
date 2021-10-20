const express = require('express');
const router = express.Router();
const productsServices = require('../services/productsServices.js');

const productService = new productsServices();

router.get('/', (request, response) => {
  const products = productService.find();
  response.json(products);
});

router.post('/', (request, response) => {
  const body = request.body;
  const newProduct = productService.create(body);
  response.status(201).json(newProduct);
});

router.patch('/:id', (request, response) => {
  const {id} = request.params;
  const body = request.body;
  const updateProduct = productService.update(id, body);
  response.json(updateProduct);
});

router.delete('/:id', (request, response) => {
  const {id} = request.params;
  const deleteProduct = productService.delete(id);
  response.json(deleteProduct);
});

router.get('/:id', (request, response) => {
  const {id} = request.params;
  const product = productService.findOne(id);
  response.json(product);
});

/*
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
*/

module.exports = router;
