const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Sex', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    Descr: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  },
  // {
  //   sequelize,
  //   tableName: 'Sex',
  //   timestamps: false,
  //   indexes: [
  //     {
  //       name: "PRIMARY_Sex",
  //       unique: true,
  //       using: "BTREE",
  //       fields: [
  //         { name: "ID" },
  //       ]
  //     },
  //   ]
  // }
  );
};
