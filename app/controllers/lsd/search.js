const { Op } = require("sequelize")
const db = require("../../models")
//------
const lsd = db.lsd

// search individual person by Mastkey or CampusKey or other identifiers
// The result is Mastkey and it'll be sent to fetch.js
module.exports = (req, res) => {
  let para = Object.keys(req.body)[0]
  
  // search by "Mastkey"
  if (para === 'Mastkey') {
    let table = 'Master'
    let model = lsd[table]
    let value = Object.values(req.body)[0]

    model.findAll({attributes: ['Mastkey'], where: {Mastkey:value} })
      .then(data => {
        res.send({data:data})
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        })
      })// below: search by "Campus Key"
  } else if ( para === 'Campus Key') {
  
    let table = 'Identifiers'
    let model = lsd[table]
    let value = Object.values(req.body)[0]

    model.findAll({
      attributes: ['Mastkey'],
      where: {
        'IDTypeKey':2,
        'IDvalue': {[Op.like]: `%${value}%`}
      }
    })
      .then(data => {
        res.send({data:data})
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        })
      })// search by "Name"
  } else if (para === 'Name') {
  
    let table = 'Master'
    let model = lsd[table]
    let lName = req.body.Name.lName
    let fName = req.body.Name.fName

    model.findAll({
      attributes: ['Mastkey', 'Lname', 'Fname', 'MI'],
      where: {
        'Lname':{[Op.like]: `%${lName}%`},
        'Fname': {[Op.like]: `%${fName}%`}
      }
    })
      .then(data => {
        res.send({data:data})
      })
      .catch(err => {
        console.log(err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        })
      })
  }
}
