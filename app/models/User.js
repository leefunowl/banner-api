module.exports = function(sequelize, DataTypes) {
  return sequelize.define('USER', {
    ID: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    USERNAME: {
      type: DataTypes.STRING
    },
    EMAIL: {
      type: DataTypes.STRING
    },
    PASSWORD: {
      type: DataTypes.STRING
    }  }, {
    sequelize,
    tableName: 'USER',
    timestamps: false,
    indexes: [
      {
        name: "USER_PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
