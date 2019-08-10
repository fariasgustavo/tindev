const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const server = express();
const port = 8000;

mongoose.connect('mongodb://mongo:27017/tindev', {useNewUrlParser: true});

server.use(express.json());
server.use(routes);

server.listen(port, () => console.log(`Node server listening on port ${port}!`));