const express = require('express');
const routes = express.Router();

routes.get('/',(req,res) => {
    return res.json({ message: "Root Route" });
});

routes.post('/devs',(req,res) => {
    return res.json({ request: req.body });
});

module.exports = routes;