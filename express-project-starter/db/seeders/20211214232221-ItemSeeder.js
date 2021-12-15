'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Items', [
     {
       name: 'PS5',
       price: 499.00,
       link: 'https://www.walmart.com/ip/Sony-PlayStation-5-Video-Game-Console/165545420',
       purchased: false,
       categoryId: 1,
       wishListId: 1,
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
      name: 'HÄRLANDA',
      price: 899.00,
      link: 'https://www.ikea.com/us/en/p/haerlanda-sofa-with-chaise-ljungen-medium-gray-s89320282/',
      purchased: false,
      categoryId: 4,
      wishListId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Items', null, {});
  }
};
