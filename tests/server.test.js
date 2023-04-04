'use strict';

const server = require('../src/server.js');
const supertest = require('supertest');

const request = supertest(server.server);

describe('Testing routes', () => {
  it('Should throw an error when using a bad route', async () => {
    const response = await request.get('/badroute');
    expect(response.status).toBe(404);
  });
  it('Should pass with code 200 when query includes name', async () => {
    const response = await request.get('/person?name=Ryan');

    expect(response.status).toBe(200);
    // expect(res.).toBe();
  });
});
