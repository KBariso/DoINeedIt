"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          content: "Omg the struggle is real lol",
          userId: 14,
          wishListId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "You should check out Red Rain seat covers, I think you'll like them!",
          userId: 11,
          wishListId: 22,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Home Depot has 20 pack organic veggie seeds for $40",
          userId: 9,
          wishListId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "I think the Sony A90J OLED is the best TV arround.. but it's so expensive....",
          userId: 5,
          wishListId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Can't wait til the weather clears up we're goin to have so much fun!",
          userId: 6,
          wishListId: 23,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "If you like aromatic scents you HAVE to check out The Move by Mercedes Benz",
          userId: 8,
          wishListId: 21,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "I love that show! I've watched it all like a million times",
          userId: 13,
          wishListId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "The Hisense U6G is the best deal you can get hands down",
          userId: 7,
          wishListId: 7,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Can't wait til the weather gets better where I am. I'm thinking of growing English Roses next year",
          userId: 7,
          wishListId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "If you're a fan of horror I'd recommend The Ruins by Scott Smith",
          userId: 2,
          wishListId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Oooh English Roses are beautiful! Do you know where I could get some seeds myself?",
          userId: 5,
          wishListId: 15,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "You should watch Psych!",
          userId: 3,
          wishListId: 17,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Read Night Film for a phenomenal mystery thriller",
          userId: 9,
          wishListId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "Add The Devil in Silver to the top of your list. ITS A MUST READ",
          userId: 12,
          wishListId: 3,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          content: "I'm a huge fan of toad lily",
          userId: 10,
          wishListId: 15,
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
