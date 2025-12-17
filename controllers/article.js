const models = require("../models");

const getAllArticles = async (req, res) => {
  try {
    const articles = await models.Article.findAll({
      include: [{ model: models.Author, as: "author" }],
    });
    res.status(200).json({ articles });
  } catch (error) {
    console.error("Error fetching articles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching articles." });
  }
};

const getArticleBySlug = async (req, res) => {
  try {
    const article = await models.Article.findOne({
      where: { slug: req.params.slug },
      include: [
        { model: models.Author, as: "author" },
        {
          model: models.Tags,
          through: { model: models.ArticleTags },
        },
      ],
    });

    if (!article) return res.status(404).json({ error: "Article not found" });

    res.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching the article." });
  }
};

const getArticlesByAuthorId = async (req, res) => {
  try {
    const author = await models.Author.findByPk(req.params.id, {
      include: [{ model: models.Article, as: "articles" }],
    });

    if (!author) return res.status(404).json({ error: "Author not found" });

    res.json(author);
  } catch (error) {
    console.error("Error fetching author articles:", error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching author articles." });
  }
};

module.exports = { getAllArticles, getArticleBySlug, getArticlesByAuthorId };
