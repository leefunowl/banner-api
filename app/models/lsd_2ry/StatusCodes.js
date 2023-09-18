const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('StatusCodes', {
    StatusKey: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    StatusCode: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    Description: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  // {
  //   sequelize,
  //   tableName: 'StatusCodes',
  //   timestamps: false,
  //   indexes: [
  //     {
  //       name: "PRIMARY_StatusCodes",
  //       unique: true,
  //       using: "BTREE",
  //       fields: [
  //         { name: "StatusKey" },
  //       ]
  //     },
  //   ]
  // }
  );
};
