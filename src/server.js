'use strict';

const express = require('express');
const logger = require('./middleware/logger');
const notFound = require('./errorhandlers/404');
const errorHandler = require('./errorhandlers/500');
const app = express();
const cors = require('cors');
const validator = require('./middleware/validator');

app.use(cors());

const data = [];

//function logger(request, response, next) {
//  console.log('Express app works!');
//  next();
//}

//app.use(logger);

app.get('/', logger, (request, response, next) => {
  request.status(200).send('Hello World!');
});

app.get('/person', (request, response, next) => {
  response.send(data);
});

app.post('/person', validator, (request, response, next) => {
  data.push(request.query.message);
  response.json(data);
});

//app.use(function (err, request, response, next) {
//  console.log(err);
//  response.status(500).send('Server Error');
//});

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  app,
  start: (port) => app.listen(port, () => {
    console.log('Server is listening');
  }),
};
