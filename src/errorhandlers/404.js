'use strict';

module.exports = (request, response, next) => {
  response.status(404).send({
    err: 404,
    route: request.originalUrl,
    message: 'Not Found',
  });
};
