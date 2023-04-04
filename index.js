'use strict';

const server = require('./src/server.js');
require('dotenv').config();

const PORT = process.env.PORT || 3002;

server.start(PORT);
