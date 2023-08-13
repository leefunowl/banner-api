const Sequelize = require("sequelize")
const config = require("../../config")

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
const {
  Master,
  Status,
  Sex,
  user,
  role,
  sequelize,
} = require("./init-models")(sequelizeBanner)

// var bannerOrm = require("./init-models")(sequelizeBanner)

// define relationships of ORMs
role.belongsToMany(user, {
  through: "USER_ROLE",
  foreignKey: "ID",
  otherKey: "ID"
})
user.belongsToMany(role, {
  through: "USER_ROLE",
  foreignKey: "ID",
  otherKey: "ID"
})

// packing ORMs and other db utilities into "db" object
const db = {
  Sequelize,
  sequelizeBanner,
  sequelize,

  Master,
  Status,
  Sex,
  user,
  role,

  ROLES : ["user", "admin", "moderator"]
}

module.exports = db
