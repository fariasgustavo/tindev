var express = require("express");
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('<h1>Node UP!!!!!!</h1>'))

app.listen(port, () => console.log(`Node server listening on port ${port}!`))