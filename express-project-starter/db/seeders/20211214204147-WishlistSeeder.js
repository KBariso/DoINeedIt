"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Wishlists",
      [
        {
          name: "Electronics",
          isPublic: true,
          userId: 1,
          description: "A wishlist for all the electronics I need!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Home Goods",
          isPublic: false,
          userId: 2,
          description: "A wishlist for the furniture I need in my house!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Wishlists", null, {});
  },
};
