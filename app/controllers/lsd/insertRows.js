const db = require("../../models")
//------
const lsd = db.lsd

module.exports = (req, res) => {
  let table = req.body.table
  let model = lsd[table]
  
  model.bulkCreate(req.body.data)
    .then((r) => {
      res.send([{message:'Succeeded :)'}])
    })
    .catch(err => {
      console.log(err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      })
    })
}
