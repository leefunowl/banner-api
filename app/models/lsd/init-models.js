var DataTypes = require("sequelize").DataTypes;
var _Master = require("./Master");

function initModels(sequelize) {
  var Master = _Master(sequelize, DataTypes);

  return {
    Master,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
