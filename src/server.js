require('dotenv').config({
    path: process.env.ENVIRONMENT === 'test' ? './.env-test' : './.env'
});

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const {host,name,port: dbport} = require('./config/database');

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

mongoose.connect(`mongodb://${host}:${dbport}/${name}`, {useNewUrlParser: true});

server.listen(process.env.SERVER_PORT, () => console.log(`server listening on port ${process.env.SERVER_PORT}!`));