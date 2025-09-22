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
      "Articles",
      [
        {
          name: "Introduction to Ashtanga",
          slug: "introduction-to-ashtanga",
          image: "ashtanga.jpg",
          body: "yoga is good stretching.",
          published: "2020-01-08 15:02:30",
          author_id: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Morning vinyasa flow routine",
          slug: "morning-vinyasa-flow-routine",
          image: "morning.jpg",
          body: "Vinyasa yoga links breath with movement.",
          published: "2020-04-14 15:02:41",
          author_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "hell",
          slug: "yoga-nature",
          image: "yoga-nature.jpg",
          body: "asdasasdasd short good",
          published: "2025-09-11 06:26:09",
          author_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {ignoreDuplicates: true}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Articles", null, {});
  },
};
