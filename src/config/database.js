require('dotenv').config({
    path: process.env.ENVIRONMENT === 'test' ? './.env-test' : './.env'
});

module.exports = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT
};