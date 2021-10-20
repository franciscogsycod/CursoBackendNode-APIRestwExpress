function logErrors (error, request, response, next) {
  console.log('logErrors');
  if (error) {
    console.error(error);
    next(error);
  } else {
    null;
  }
}

function errorHandler (error, request, response, next) {
  console.log('errorHandler');
  if (error) {
    response.status(500).json({
      message: error.message,
      stack: error.stack
    })
  } else {
    null;
  }
}

module.exports = {
  logErrors,
  errorHandler
};
