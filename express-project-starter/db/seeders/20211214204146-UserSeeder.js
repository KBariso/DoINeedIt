"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "John Doe",
          email: "johndoe@email.com",
          username: "johndoe",
          hashedPassword: "Password!1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Sally Doe",
          email: "sallydoe@email.com",
          username: "sallydoe",
          hashedPassword: "Password!1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
