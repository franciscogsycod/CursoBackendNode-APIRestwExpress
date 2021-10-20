const express = require('express');
const faker = require('faker');
const router = express.Router();
const port = 8080;

router.get('/', (request, response) => {
  const users = [];

  const {limit, offset} = request.query;
  const sizeArray = limit || 10;

  for(let i = 0; i < sizeArray; i++){
    users.push({
      type: faker.vehicle.vehicle(),
    })
  }
  response.json(users)
});

module.exports = router;