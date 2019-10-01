const axios = require('axios');

require('dotenv').config({
    path: process.env.ENVIRONMENT === 'test' ? './.env-test' : './.env'
});

const axiosConfig = axios.create({
    baseURL: `http://localhost:${process.env.SERVER_PORT}`
});

module.exports = axiosConfig;