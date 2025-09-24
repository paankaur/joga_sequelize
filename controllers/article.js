const Sequelize = require("sequelize");
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_PASSWORDDB_HOST,
    dialect: "mysql",
  }
);
const Article = require('../models/article')(sequelize, Sequelize.DataTypes);

const Author = require('../models/author')(sequelize, Sequelize.DataTypes);

exports.getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll(/* {
      include: [{
        model: Author,
        as: 'author'
      }]
    } */);
    res.status(200).json(articles);
    
  } catch (error) {
    console.error('Error fetching articles:', error);
    res.status(500).json({ error: 'An error occurred while fetching articles.' });
  }
};