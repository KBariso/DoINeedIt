'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullName: {
      type:DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type:DataTypes.STRING(255),
      allowNull: false,
      unique:true
    },
    username:  {
      type:DataTypes.STRING(50),
      allowNull: false,
      unique:true
    },
    hashedPassword: {
      type:DataTypes.STRING.BINARY,
      allowNull: false
    },
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Wishlist, { foreignKey: 'userId' })
    User.hasMany(models.Comment, { foreignKey: 'userId' })

    // User.hasMany(models.Favorite, { foreignKey: 'userId' });
    User.belongsToMany(models.Item, {
      through: 'Favorite',
      otherKey: 'itemId',
      foreignKey: 'userId'
    })

  };
  return User;
};
