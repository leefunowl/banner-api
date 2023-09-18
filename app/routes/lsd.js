const { authJwt } = require("../middleware")
const controller = require("../controllers/lsd")
//------
const baseUrl = '/api/lsd/'

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    )
    next()
  })
  
  // lsd primary tables
  app.post(
    baseUrl + 'search',
    [authJwt.verifyToken],
    controller.search
  )
  
  app.post(
    baseUrl + 'fetch',
    [authJwt.verifyToken],
    controller.fetch
  )
  
  app.post(
    baseUrl + 'insert',
    [authJwt.verifyToken],
    controller.insertRows
  )
  
  app.post(
    baseUrl + 'update',
    [authJwt.verifyToken],
    controller.updateRows
  )
  
  app.delete(
    baseUrl + 'remove',
    [authJwt.verifyToken],
    controller.removeRows
  )
  
  // lsd secondary tables
  app.post(
    baseUrl + 'fetchSecTs',
    [authJwt.verifyToken],
    controller.fetchSecTs
  )
  
}
