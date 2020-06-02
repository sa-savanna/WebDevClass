const Article = require('../models/article')

var ArticleController = {};

ArticleController.list = function(req, res) {
    Article.find({}, function (err, articles) {
        if (err) throw err;
        res.render("../views/article/index", {articles: articles});
    });
};

ArticleController.findById = function(req, res) {
    Article.findById(req.params.id, function(err, article) {
      if (err) throw err;
      res.render("../views/article/view", { article:article });
    });
};

ArticleController.create = function(req, res) {
    res.render("../views/article/create");
};

ArticleController.save = function(req, res) {
    var article = new Article(req.body);
    console.log(req.body)
    Article.save(function(err) {
        if (err) {
            console.log(err);
            res.render("../views/articles/create");
        } else {
            console.log("Successfully created an Article.");
            res.redirect("/home/article/view/" + article._id);
        }
    });
};

ArticleController.edit = function(req, res) {
    Article.findOne({_id: req.params.id}).exec(function (err, article) {
        if (err) throw err;
        res.render("../views/article/edit", {article:article});
    });
};

ArticleController.update = function(req, res) {
    Article.findByIdAndUpdate(req.params.id, 
                               { $set: { 
                                   firstName: req.body.firstName,
                                   lastName: req.body.lastName,
                                   email: req.body.email,
                                   password: req.body.password
                               }}, 
                               { new: true }, 
                               function (err, article) {
        if (err) {
            console.log(err);
            res.render("../views/article/edit", { article: req.body });
        }
        res.redirect("/home/article/view/" + article._id);
    });
};

ArticleController.delete = function(req, res) {
    Article.findByIdAndRemove(req.params.id, function(err) {
      if (err) throw err;
      console.log("Article deleted!");
      res.redirect("/home/article");
    });
};

module.exports = ArticleController;
