const express = require('express');
const productsRouter = require('./productsRouter');
const categoriesRouter = require('./categoriesRouter');
const usersRouter = require('./usersRouter');

function routerAPI(app) {
  const router = express.Router();

  app.use(express.json());
  app.use('/api/v1', router);

  router.use('/products/', productsRouter);
  router.use('/categories/', categoriesRouter);
  router.use('/users/', usersRouter);
}

module.exports = routerAPI;
