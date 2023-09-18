const db = require("../../models")
var c = require('../../../config')
//------
const lsd = db.lsd
const lsd_2ry = db.lsd_2ry
// sm = schema map
const sm = { 'LSD':lsd, 'lsd_2ry':lsd_2ry }

module.exports = (req, res) => {
  let fk = req.body.fk
  let table = c.secTsMeta[fk].table
  let schema = c.secTsMeta[fk].schema
  let model = sm[schema][table]

  // secondary table data dictionary
  model.findAll({
    attributes : c.secTsMeta[fk].col
  })
    .then(dict => {
      res.send({dict : dict})
    })
}
