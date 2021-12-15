'use strict';
module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    price: {
      type: DataTypes.NUMERIC(10,2),
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT
    },
    purchased: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    wishListId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.Category, { foreignKey: 'categoryId' });
    Item.belongsTo(models.Wishlist, { foreignKey: 'wishListId' });

    // Item.hasMany(models.Favorite, { foreignKey: 'itemId' })
    Item.belongsToMany(models.User, {
      through: 'Favorite',
      otherKey: 'userId',
      foreignKey: 'itemId'
    });
  };
  return Item;
};
