'use strict';

module.exports = (request, response) => {
  console.log('404 error handler');
  response.status(404);
  response.end();
};
