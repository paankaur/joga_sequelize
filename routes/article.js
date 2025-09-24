const express = require('express');
const router = express.Router();
const { Article, Author } = require('../models');


const articleController = require('../controllers/article');
router.get('/', articleController.getAllArticles);

module.exports = router;