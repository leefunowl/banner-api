const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
var config = require('./config')
// const db = require('./app/models')

const app = express();

// app.use(cors(config.corsOptions))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
  res.status(200).send({ value:"Hello World!" });
});

require('./app/routes/auth')(app)

module.exports = app;