const Article = require('./../models/article');

async function getArticles(req , res) {
    try {
        let articles = await Article.find({});
        res.json(articles);  
    } catch (err) {
        res.json(err);
    }
}

async function postArticle(req , res) {
    try {
        let article = new Article(req.body);
        article = await article.save();

        res.json({ message : "Article successfully added!" , article});

    } catch (err) {
        res.json(err);
    }
}

async function getArticle(req , res) {
    try {
        let article = await Article.findById(req.params.id);
        res.json(article);
    } catch (err) {
        res.json(err);
    }
}

async function deleteArticle(req , res) {
    try {
        let result = await Article.deleteOne({ _id : req.params.id });
        res.json({ message : "Article successfully deleted!" , result});
    } catch (err) {
        res.json(err);
    }
}


async function updateArticle(req , res) {
    try {
        let article = await Article.findById(req.params.id);

        article.set({ ...req.body });

        let result = await article.save();

        res.json({ message : 'Article updated!' , result}); 
    } catch (err) {
        res.json(err);
    }
}

module.exports = {
    getArticles,
    postArticle,
    getArticle,
    deleteArticle,
    updateArticle
}