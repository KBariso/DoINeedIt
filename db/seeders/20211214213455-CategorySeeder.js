"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Electronics",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Movies & Games",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Books",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Home Goods",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Outdoor",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Apparel & Accessories",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Beauty & Health",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Food & Grocery",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Pet Supplies",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Automotive",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Other",
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  },
};
