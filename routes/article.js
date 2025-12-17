const express = require('express');
const router = express.Router();
const { Article, Author } = require('../models');
const articleController = require('../controllers/article');
const adminController = require('../controllers/admin/articles');

// Admin route to create a new article
router.post('/admin/article/create', adminController.createArticle);

// Public routes to get articles

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getArticlesByAuthorId);


module.exports = router;