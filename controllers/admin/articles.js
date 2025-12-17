const dotenv = require('dotenv');
dotenv.config();
const Sequelize = require('sequelize');
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
  }
);

const models = require('../../models');

const createArticle = async (req, res) => {
  try {
    const { name, slug, image, body } = req.body;
    const newArticle = await models.Article.create({
      name: name,
      slug: slug,
      image: image,
      body: body,
      published: new Date().toISOString().slice(0, 19).replace('T', ' '),
    });
    res.status(201).json(newArticle);
    console.log(newArticle) // kahtlane
  } catch (error) {
    console.error('Error creating article:', error);
    res.status(500).json({ error: 'An error occurred while creating the article.' });
  }
};
module.exports = { createArticle };