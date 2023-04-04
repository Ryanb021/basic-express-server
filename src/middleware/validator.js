'use strict';

module.exports = (request, response, next) => {
  const query = request.query.name;
  if(query) {
    next();
  } else {
    next('Invalid Request');
  }
};

// const validator = (request, response, next) => {
//   let name = 'name';
//   next();
// };
