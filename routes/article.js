const express = require('express');
const router = express.Router();
const { Article, Author } = require('../models');
const articleController = require('../controllers/article');

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getArticlesByAuthorId);

module.exports = router;