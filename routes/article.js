const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article');
const adminController = require('../controllers/admin/articles');

// Admin routes
router.post('/admin/article/create', adminController.createArticle);
router.put('/admin/article/edit/:id', adminController.editArticle);
router.delete('/admin/article/delete/:id', adminController.deleteArticle);

// Public routes to get articles

router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticleBySlug);
router.get('/author/:id', articleController.getArticlesByAuthorId);


module.exports = router;