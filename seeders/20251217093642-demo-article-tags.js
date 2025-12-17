'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return Promise.all([
      queryInterface.bulkInsert('ArticleTags', [
        {
          articleId: 25,
          tagId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 25,
          tagId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 26,
          tagId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 27,
          tagId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 27,
          tagId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 27,
          tagId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          articleId: 26,
          tagId: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],),
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
