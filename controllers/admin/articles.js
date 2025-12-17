const dotenv = require("dotenv");
dotenv.config();

const models = require("../../models");

const createArticle = async (req, res) => {
  try {
    const { name, slug, image, body } = req.body;
    const newArticle = await models.Article.create({
      name: name,
      slug: slug,
      image: image,
      body: body,
      published: new Date().toISOString().slice(0, 19).replace("T", " "),
    });
    res.status(201).json(newArticle);
    console.log(newArticle.toJSON());
  } catch (error) {
    console.error("Error creating article:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the article." });
  }
};
const editArticle = async (req, res) => {
  try {
    const article = await models.Article.findByPk(req.params.id);
    
    if (!article) {
      return res.status(404).json({ error: 'Article not found' });
    }

    const updatedArticle = await article.update({
      name: req.body.name,
      slug: req.body.slug,
      image: req.body.image,
      body: req.body.body,
    });

    return res.status(200).json({
      message: 'Article updated',
      article: updatedArticle
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteArticle = async (req, res) => {
  // Implementation for deleting an article
};

module.exports = { createArticle, editArticle, deleteArticle };
