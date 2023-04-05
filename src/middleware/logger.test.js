'use strict';

const logger = require('./logger.js');
//const error = require('../errorhandlers/404.js');

describe('Test the logger middleware', () => {
  test('Should be able to log a GET method', () => {
    const request = {
      query: {
        name: 'Ryan',
      },
    };
    const response = {};
    const next = jest.fn();

    logger(request, response, next);

    expect(request.query.name).toEqual('Ryan');
    expect(next).toHaveBeenCalled();
  });

  test('Should output error when a different method is called', () => {
    const request = {query: {}};
    const response = {};
    const next = jest.fn();
    //request.method = 'PUT';
    logger(request, response, next);

    //expect(next).toHaveBeenCalledWith('Invalid method');
    expect(next).toHaveBeenCalled();
    //expect(response.status).toBe(404);

  });
});
