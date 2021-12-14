"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          content: "Cool undiscovered electronics! I want everything in here!",
          userId: 1,
          wishListId: 1,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Saved up for item 1 and 2, now I just gotta buy the rest...",
          userId: 2,
          wishListId: 2,
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Comments", null, {});
  },
};
