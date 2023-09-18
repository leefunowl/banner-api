const Sequelize = require("sequelize")
//------
const config = require("../../config")
//------
// db uris
const dbUri = config.dbUri
const sequelizeBanner = new Sequelize(
  'BANNER',
  dbUri.USER,
  dbUri.PASSWORD,
  {
    // host: dbUri.HOST,
    dialect: dbUri.dialect,
    operatorsAliases: false,
    storage: dbUri.STORAGE,

    pool: {
      max: dbUri.pool.max,
      min: dbUri.pool.min,
      acquire: dbUri.pool.acquire,
      idle: dbUri.pool.idle
    }
  }
)

// get ORMs
// var lsd = require("../models/lsd/init-models")(sequelizeBanner)
// var lsd_2ry = require("../models/lsd_2ry/init-models")(sequelizeBanner)
var user = require("../models/user.js")(sequelizeBanner, Sequelize)
var role = require("../models/role.js")(sequelizeBanner, Sequelize)

// define relationships of ORMs
// lsd_2ry.Organizations.hasMany(lsd.AcademicProgress, {
//   foreignKey: 'InstitutionKey'
// })
// lsd.AcademicProgress.belongsTo(lsd_2ry.Organizations, {
//   foreignKey: 'InstitutionKey'
// })

role.belongsToMany(user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
})
user.belongsToMany(role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
})

// packing ORMs and other db utilities into "db" object
const db = {
  Sequelize,
  sequelizeBanner,

  user,
  role,
  // lsd,
  // lsd_2ry,

  ROLES : ["user", "admin", "moderator"]
}

module.exports = db
