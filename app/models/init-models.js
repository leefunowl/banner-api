const Sequelize = require("sequelize")

var DataTypes = require("sequelize").DataTypes;

var _Master = require("./Master");
var _Status = require("./Status");
var _Sex = require("./Sex");
var _User = require("./User");
var _Role = require("./Role");

function initModels(sequelize) {
  var Status = _Status(sequelize, DataTypes);
  var Master = _Master(sequelize, DataTypes);
  var Sex = _Sex(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);
  var Role = _Role(sequelize, DataTypes);

  return {
    Master,
    Status,
    Sex,
    User,
    Role,
    sequelize,
  };
}
module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
