const express = require('express');

const AccountRouter = require('./data/accounts-router.js');

// const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', AccountRouter);

module.exports = server;