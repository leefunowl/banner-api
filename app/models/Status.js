module.exports = function(sequelize, DataTypes) {
  return sequelize.define('STATUS', {
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
  }, {
    sequelize,
    tableName: 'STATUS',
    timestamps: false,
    indexes: [
      {
        name: "STATUS_PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "StatusKey" },
        ]
      },
    ]
  });
};
