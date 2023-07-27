module.exports = function(sequelize, DataTypes) {
  return sequelize.define('MASTER', {
    MASTER_ID: {
      autoIncrement: true,
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true
    },
    LAST_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    FIRST_NAME: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    MI: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    GENDER: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    DOB: {
      type: DataTypes.DATE,
      allowNull: true
    },
    STATUS: {
      type: DataTypes.STRING(5),
      allowNull: true
    },
  }, {
    sequelize,
    tableName: 'MASTER',
    timestamps: false,
    indexes: [
      {
        name: "MASTER_PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "MASTER_ID" },
        ]
      },
    ]
  });
};
