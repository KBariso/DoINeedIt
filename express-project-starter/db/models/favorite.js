'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    itemId: {
      allowNull: false,
      type: DataTypes.INTEGER,
    },
    userId: {
      allowNull: false,
      type: DataTypes.INTEGER
    }
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    // Favorite.belongsTo(models.Item, { foreignKey: 'itemId' })
    // Favorite.belongsTo(models.User, { foreignKey: 'userId' })
  };
  return Favorite;
};
