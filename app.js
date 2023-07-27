const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var config = require('./config')
// const db = require('./app/models')

const app = express();

app.use(cors(config.corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;