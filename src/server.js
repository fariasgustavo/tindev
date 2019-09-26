const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const {host,name,port: dbport} = require('./config/database');

const server = express();
const port = 8000;

server.use(cors());
server.use(express.json());
server.use(routes);

mongoose.connect(`mongodb://${host}:${dbport}/${name}`, {useNewUrlParser: true});

server.listen(port, () => console.log(`server listening on port ${port}!`));