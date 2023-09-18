const sequelize = require("sequelize")
//------
const uti = require('./utilities')
const db = require("../../models")
var c = require('../../../config')
//------
const lsd = db.lsd

// cosb = client or server boundary (when to use client or server for pagination etc.)
let cosb = c.cosb

// fetch data from a specific table based on Mastkey
module.exports = (req, res) => {
  let maxIdx
  let table = req.body.table
  let where = req.body.where
  // pn = page #
  let pn = req.body.pn
  // spp = size per page
  let spp = req.body.spp
  // sf = sortField
  let sf = req.body.sf
  // so = sortOrder
  let so = req.body.so
  // fp = filter parameter
  let fp = req.body.fp
  // default table operation mode
  let mode = null
  let pk = c.priTsMeta[table].pk
  
  let model = lsd[table]
  
  // if it's server-side operations, check if 'fp' (filter parameter) from client has values,
  // if it does, set filter parameters and set mode = 'filter'
  if (fp && Object.keys(fp).length !== 0) {
    for (const [k, v] of Object.entries(fp)) {      
      where[k] = sequelize.where(sequelize.fn('LOWER', sequelize.col(k)), 'LIKE', '%' + v.filterVal + '%')
    }
    mode = 'filter'
  }
    
  // get max value of primary key in current table
  model.max(pk).then(data => {maxIdx = data}) 
  model.findAndCountAll({
    where : where,
    order : sf ? [[sf, so]] : null,
    ...uti.paginate({ pn, spp }),
  })// r = result
    .then(r => {
      // if # of returned result < config setting and it's not server-client filter, do client-side operations
      if (r.count < cosb && mode !== 'filter') {
        model.findAll({ where : where })
          .then(data => {
            res.send({
              // table operation mode: client side
              mode : 'client',
              data : data,
              // tnr = total # of records
              tnr : r.count,
              maxIdx : maxIdx,
              secTs : c.priTsMeta[table].secTs
            })
          })// he = handle error
          .catch(err => uti.he(err, res))
      } else if (r.count >= cosb || mode === 'filter') {
        res.send({
          // if # of returned result >= config setting or it's server-client filter, do server-side operations
          // table operation mode: server side
          mode : 'server',
          data : r.rows,
          tnr : r.count,
          maxIdx : maxIdx,
          secTs : c.priTsMeta[table].secTs,
        })
      }
      
    })// he = handle error
    .catch(err => uti.he(err, res))
}
