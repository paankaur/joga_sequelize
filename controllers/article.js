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
const Article = require("../models/article")(sequelize, Sequelize.DataTypes);

const Author = require("../models/author")(sequelize, Sequelize.DataTypes);

const getAllArticles = async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.status(200).json({ articles });
  } catch (error) {
    console.error("Error fetching articles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching articles." });
  }
};

const getArticleBySlug = async (req, res) => {
    Article.findOne({
      where: { slug: req.params.slug },
    //   include: Author
    }).then(article => {
      if (!article) {
        return res.status(404).json({ error: 'Article not found' });
      }
      res.json(article);
    }).catch(error => {
      console.error('Error fetching article:', error);
      res.status(500).json({ error: 'An error occurred while fetching the article.' });
    });
  };
  
module.exports = { getAllArticles, getArticleBySlug };