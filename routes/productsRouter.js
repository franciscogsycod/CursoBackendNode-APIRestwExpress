const express = require('express');
const router = express.Router();
const productsServices = require('../services/productsServices.js');

const productService = new productsServices();

router.get('/', async (request, response) => {
  const products = await productService.find();
  response.json(products);
});

router.post('/', async (request, response) => {
  const body = request.body;
  const newProduct = await productService.create(body);
  response.status(201).json(newProduct);
});

router.patch('/:id', async (request, response, next) => {

  try {
    const {id} = request.params;
    const body = request.body;
    const updateProduct = await productService.update(id, body);
    response.json(updateProduct);
  } catch (error) {
      next(error);
    };
  }
);

router.delete('/:id', async (request, response) => {
  const {id} = request.params;
  const deleteProduct = await productService.delete(id);
  response.json(deleteProduct);
});

router.get('/:id', async (request, response, next) => {
  try {
    const {id} = request.params;
    const product = await productService.findOne(id);
    response.json(product);
  } catch (error) {
    next(error);
  }
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
