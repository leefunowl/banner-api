const c = require("../../../config")
const db = require("../../models")
//------
const lsd = db.lsd

module.exports = (req, res) => {
  let table = req.body.table
  let model = lsd[table]
  let condition = {}
   
  condition[c.priTsMeta[table].pk] = req.body.id

  model.update(req.body.data, { where:condition })
    .then(() => {
      res.send({message:'Succeeded :)'})
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
