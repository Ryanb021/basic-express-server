'use strict';


const validator = require('../middleware/validator.js');

describe('Test if middleware validators is working', () => {
  let request = {method: 'GET', query: {}};
  let response = {status: jest.fn()};
  let next = jest.fn(); // a spy
  it('Should output error it there is no name input', () => {
    request.query.name = undefined;
    validator(request, response, next); //passing values  to logger function

    expect(next).toHaveBeenCalledWith('Invalid Request');
  });
});
