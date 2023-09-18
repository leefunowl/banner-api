const { Op } = require("sequelize")
//------
const search = require("./search")
const fetch = require("./fetch")
const fetchSecTs = require('./fetchSecTs')
const insertRows = require('./insertRows')
const updateRows = require('./updateRows')
const removeRows = require('./removeRows')
//------
module.exports = {
  search,
  fetch,
  fetchSecTs,
  insertRows,
  updateRows,
  removeRows
}
