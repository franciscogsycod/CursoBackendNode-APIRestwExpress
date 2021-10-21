const boom = require('@hapi/boom');

function validationHandler (schema, property) { // middleware dinamico
  return (request, response, next) => {  // propiedad de closures
    const data = request[property];
    const {error} = schema.validate(data, {abortEarly: false});
    if (error) {
      next(boom.badRequest(error));
    } else {
      next();
    }
  }
}

module.exports = validationHandler;
