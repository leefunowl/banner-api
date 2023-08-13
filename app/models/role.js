module.exports = (sequelize, Sequelize) => {
  const Role = sequelize.define("roles", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING
    }
  })

  return Role
}


// module.exports = function(sequelize, DataTypes) {
//   return sequelize.define('roles', {
//     ID: {
//       type: DataTypes.INTEGER,
//       primaryKey: true
//     },
//     NAME: {
//       type: DataTypes.STRING
//     }}, {
//     sequelize,
//     // tableName: 'ROLE',
//     timestamps: false,
//     indexes: [
//       {
//         name: "ROLE_PRIMARY",
//         unique: true,
//         using: "BTREE",
//         fields: [
//           { name: "ID" },
//         ]
//       },
//     ]
//   });
// };
