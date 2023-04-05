'use strict';

const express = require('express');
const server = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const notFound = require('./errorhandlers/404.js');
const errorHandler = require('./errorhandlers/500.js');
//const app = express();
const cors = require('cors');

server.use(cors());
server.use(express.json());
server.use(logger);

server.get('/person', validator, (request, response, next) => {
  response.status(200);
  response.send({ name: request.query.name.value });
});

server.use(notFound);
server.use(errorHandler);

module.exports = {
  server,
  start: (port) => server.listen(port, () => {
    console.log('Server is listening');
  }),
};

// app.use(validator);


//const data = [];

//function logger(request, response, next) {
//  console.log('Express app works!');
//  next();
//}

//app.use(logger);

// app.get('/', logger, (request, response, next) => {
//   request.status(200).send('Hello World!');
// });

// app.get('/person', (request, response, next) => {
//   response.send(data);
// });

// app.post('/person', validator, (request, response, next) => {
//   data.push(request.query.message);
//   response.json(data);
// });

// //app.use(function (err, request, response, next) {
// //  console.log(err);
// //  response.status(500).send('Server Error');
// //});

// app.use('*', notFound);
// app.use(errorHandler);

// module.exports = {
//   app,
//   start: (port) => app.listen(port, () => {
//     console.log('Server is listening');
//   }),
// };
