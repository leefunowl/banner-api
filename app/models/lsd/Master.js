const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Master', {
    Mastkey: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    Lname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Fname: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Gender: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
  },
  // {
  //   sequelize,
  //   tableName: 'Master',
  //   timestamps: false,
  //   indexes: [
  //     {
  //       name: "PRIMARY_Master",
  //       unique: true,
  //       using: "BTREE",
  //       fields: [
  //         { name: "Mastkey" },
  //       ]
  //     },
  //   ]
  // }
  );
};
