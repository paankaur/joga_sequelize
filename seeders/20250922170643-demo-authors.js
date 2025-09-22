"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      "Authors",
      [
        {
          name: "Ashley Galvin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { name: "Patrick Beach", createdAt: new Date(), updatedAt: new Date() },

        {
          name: "Mackenzie Miller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {ignoreDuplicates: true}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Authors", null, {});
  },
};
