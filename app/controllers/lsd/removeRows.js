const c = require("../../../config")
const db = require("../../models")
//------
const lsd = db.lsd

module.exports = (req, res) => {
  let table = req.body.table
  let model = lsd[table]
  let condition = {}
  condition[c.priTsMeta[table].pk] = req.body.ids
  
  model.destroy({ where: condition})
    .then(() => {
      res.send(req.body)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
