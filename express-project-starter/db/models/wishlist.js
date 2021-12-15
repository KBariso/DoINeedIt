'use strict';
module.exports = (sequelize, DataTypes) => {
  const Wishlist = sequelize.define('Wishlist', {
    name: {
      type: DataTypes.STRING(100),
      allowNull:false
    },
    isPublic: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    description: {
      type: DataTypes.TEXT,
    },
  }, {});
  Wishlist.associate = function(models) {
    Wishlist.belongsTo(models.User, { foreignKey: 'userId' })
    Wishlist.hasMany(models.Comment, { foreignKey: 'wishListId' })
    Wishlist.hasMany(models.Item, { foreignKey: 'wishListId' })
  };
  return Wishlist;
};
