'use strict';

const validator = (request, response, next) => {
  let name = name();
  next();
};
//function validator(request, response, next) {
//  if (!request.query.message) {
//    next('Please input a name');
//  } else {
//    request.query.message = request.query.message();
//    next();
//  }
//}

module.exports = validator;
