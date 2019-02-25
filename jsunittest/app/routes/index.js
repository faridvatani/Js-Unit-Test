const express = require('express');
const router = express.Router();

const article = require('./../controllers/article');

router.get('/api' , (req ,res) => res.json({ message : "Welcome to our Website!"}));

router.route('/api/article')
    .get(article.getArticles)
    .post(article.postArticle);

router.route('/api/article/:id')
    .get(article.getArticle)
    .delete(article.deleteArticle)
    .put(article.updateArticle);


module.exports = router;