'use strict';

module.exports = (err, request, response, next) => {
  response.status(500).send({
    err: 500,
    route: request.path,
    query: request.query,
    body: request.body,
    message: typeof (err) === 'string' ? err : `SERVER ERROR: ${err.message}`,
  });
};
