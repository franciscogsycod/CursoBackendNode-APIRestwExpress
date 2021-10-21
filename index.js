const express = require('express');
const cors = require('cors');
const app = express();
const port = 8080;

const routerAPI = require('./routes');
const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/errorHandler');

app.get('/', (request, response) => {
  response.send("Hola este es mi server en Express");
});

routerAPI(app);

const permitedList = [
  'http://127.0.0.1:5500/'
];

const options = {
  origin: (origin, callback) => {
    if (permitedList.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not Permited'));
    }
  }
}
app.use(cors(permitedList));
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi puerto esta en http://localhost:${port}`);
});
