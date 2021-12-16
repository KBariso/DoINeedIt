'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});
  Category.associate = function(models) {
    // associations can be defined here
    Category.hasMany(models.Item, { foreignKey: 'categoryId' });
  };
  return Category;
};
