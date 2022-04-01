"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Wishlists",
      [
        {
          name: "Gotta Look Good",
          isPublic: true,
          userId: 3,
          description: "Just a couple of things I want before my bffs big day",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Christmas Wishlist",
          isPublic: true,
          userId: 7,
          description: "I hope Santa sees this wishlist!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Adding to My Reading Backlog...",
          isPublic: true,
          userId: 6,
          description: "I have 17 books in my backlog... but I NEED more!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Collecting Pokemon Movies",
          isPublic: true,
          userId: 5,
          description: "Gotta buy them all!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gaming Wishlist",
          isPublic: true,
          userId: 15,
          description: "I want some new games in my life",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Entertainment Center",
          isPublic: true,
          userId: 9,
          description: "I want to add some cool things to my new home theater",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Need a new TV",
          isPublic: true,
          userId: 13,
          description: "Need a new TV",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Christmas Shopping",
          isPublic: true,
          userId: 5,
          description: "Some parts I want for my PC upgrade",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Give me book suggestions",
          isPublic: true,
          userId: 4,
          description: "I'm all out of books to read",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Never have enough shoes",
          isPublic: true,
          userId: 10,
          description: "I want shoes, shoes, and more shoes!",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Grocery List",
          isPublic: false,
          userId: 10,
          description: "Some groceries I need for Christmas dinner",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Just Car Tings",
          isPublic: true,
          userId: 8,
          description: "Tryna spruce up the whip",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Hot Fashion",
          isPublic: true,
          userId: 2,
          description: "These are definitely a must",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Buying a new car",
          isPublic: true,
          userId: 14,
          description: "Thinking of buying a new car",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Gardening",
          isPublic: true,
          userId: 3,
          description: "A wishlist for my gardening needs",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Fluffy Needs New Toys",
          isPublic: true,
          userId: 6,
          description: "Fluffy is my dog",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "My Favorite TV Show",
          isPublic: true,
          userId: 2,
          description: "I NEED to own the complete Monk TV series on DVD",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Lost My Airpods... Again",
          isPublic: true,
          userId: 2,
          description: "Title says it all...",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Jewelery Please",
          isPublic: true,
          userId: 10,
          description: "I need some bling for the New Year's party",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Perfumes",
          isPublic: true,
          userId: 5,
          description: "I only wear the best of the best",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Colognes",
          isPublic: true,
          userId: 9,
          description: "Wanna try some new colognes",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Car Stuffs",
          isPublic: true,
          userId: 3,
          description: "I need to deck out my ride",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Backyard Fun",
          isPublic: false,
          userId: 9,
          description: "I'm going to have the coolest backyard ever",
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
