'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // 1. Add Foreign Key for articleId
    await queryInterface.addConstraint('ArticleTags', {
      fields: ['articleId'],
      type: 'foreign key',
      name: 'fk_article_tags_article_id', // custom name for the constraint
      references: {
        table: 'Articles',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });

    // 2. Add Foreign Key for tagId
    await queryInterface.addConstraint('ArticleTags', {
      fields: ['tagId'],
      type: 'foreign key',
      name: 'fk_article_tags_tag_id', // custom name for the constraint
      references: {
        table: 'Tags',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    // Remove the constraints if we undo the migration
    await queryInterface.removeConstraint('ArticleTags', 'fk_article_tags_article_id');
    await queryInterface.removeConstraint('ArticleTags', 'fk_article_tags_tag_id');
  }
};