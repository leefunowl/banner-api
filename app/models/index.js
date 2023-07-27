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
  User,
  Role,
  sequelize,
} = require("./init-models")(sequelizeBanner)

// var bannerOrm = require("./init-models")(sequelizeBanner)

// define relationships of ORMs
Role.belongsToMany(User, {
  through: "USER_ROLE",
  foreignKey: "ID",
  otherKey: "ID"
})
User.belongsToMany(Role, {
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
  User,
  Role,

  ROLES : ["user", "admin", "moderator"]
}

module.exports = db
