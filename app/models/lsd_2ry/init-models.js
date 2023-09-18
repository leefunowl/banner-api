var DataTypes = require("sequelize").DataTypes;
var _StatusCodes = require("./StatusCodes");
var _Sex = require("./Sex");

function initModels(sequelize) {
  var StatusCodes = _StatusCodes(sequelize, DataTypes);
  var Sex = _Sex(sequelize, DataTypes);

  return {
    StatusCodes,
    Sex,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
