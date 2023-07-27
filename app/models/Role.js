module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ROLE', {
    ID: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    NAME: {
      type: DataTypes.STRING
    }}, {
    sequelize,
    tableName: 'ROLE',
    timestamps: false,
    indexes: [
      {
        name: "ROLE_PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ID" },
        ]
      },
    ]
  });
};
