const Sequelize = require("sequelize")

var DataTypes = require("sequelize").DataTypes;

var _Master = require("./Master");
var _Status = require("./Status");
var _Sex = require("./Sex");
var _user = require("./user");
var _role = require("./role");

function initModels(sequelize) {
  var Status = _Status(sequelize, DataTypes);
  var Master = _Master(sequelize, DataTypes);
  var Sex = _Sex(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var role = _role(sequelize, DataTypes);

  return {
    Master,
    Status,
    Sex,
    user,
    role,
    sequelize,
  };
}
module.exports = initModels;
// module.exports.initModels = initModels;
// module.exports.default = initModels;
