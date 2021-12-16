"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Users",
      [
        {
          fullName: "Tryphena Nia",
          email: "t.nia@email.com",
          username: "TryppyN",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Brahma Wendy",
          email: "brahma.wendy@email.com",
          username: "BrahmaW",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Evelin Norman",
          email: "evelinnorman@email.com",
          username: "EvieSchmevie",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Ashkii Ray",
          email: "a.ray@email.com",
          username: "AshkMeAgain",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Diana Izydor",
          email: "diana.izydore@email.com",
          username: "dianaizydor",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Prachi Smeagol",
          email: "psmeagol@email.com",
          username: "Prachi",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Barrie Rhoxane",
          email: "barrie.r@email.com",
          username: "barriebee",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Alexey Krasimir",
          email: "alexkras@email.com",
          username: "alexkras",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Vasanti Sadaf",
          email: "vasanti@email.com",
          username: "vasantis",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Kobina Mokosh",
          email: "kobina.m@email.com",
          username: "KobiM",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Allana Noureddin",
          email: "allana.noureddin@email.com",
          username: "AllanaBanana",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Ajda Niall",
          email: "aniall@email.com",
          username: "AjdaAjda",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Bharata Koppany",
          email: "bharata.k@email.com",
          username: "Ko-Pop",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Anastasie Pippin",
          email: "anastasie@email.com",
          username: "AnaPippin",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          fullName: "Almira Jogvan",
          email: "ajogvan@email.com",
          username: "MiraJ",
          hashedPassword: "$2a$10$6kqgmEMdKJ6VkDYZlsruDOv.g.fbQoQZb2SGSwzNlWXVq/X.C0nhG",
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
