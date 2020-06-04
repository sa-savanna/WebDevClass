var express = require('express');
var router = express.Router();
var Article = require('../models/article') // model


// get all articles
router.get('/',(req,res)=>{
    Article.find({},function(err,articles){
        if(err)throw err;
        res.render('../views/article/index',{articles:articles})
    })
})

// get single articles by id
router.get('/view/:id',(req,res)=>{
    Article.findById(req.params.id,function(err,article){
        if(err) throw err;
        console.log(article)
        res.render('../views/article/view',{article:article})
    })
})


// create article
router.get('/create',(req,res)=>{
    res.render('../views/article/create')
})

router.post('/save',(req,res)=>{
    var article = new Article(req.body);

    article.save() // saved 
    .then(data=>{
        console.log('saved')
        res.redirect('/home/article/view/'+ data._id) // show article
    })
})

// delete 

router.get('/delete/:id',(req,res)=>{
    Article.findByIdAndRemove(req.params.id,err=>{
        if(err) throw err;
        console.log('Article deleted');
        res.redirect('/home/article')
    })
})


// edit

router.get('/edit/:id',(req,res)=>{
    Article.findOne({_id:req.params.id})
    .exec((err,article)=>{
        if(err) throw err;
        res.render("../views/article/edit",{article:article})
    })
})

// update post request
router.post('/update/:id',(req,res)=>{
    Article.findByIdAndUpdate(req.params.id,{
        $set:{
            title:req.body.title,
            desc:req.body.desc,
            image:req.body.image,
            content:req.body.content
        }
    },
    {new:true},
    (err,article)=>{
        if(err){
            res.render('../views/article/edit',{article:req.body})
        }
        res.redirect("/home/article/view/"+article._id)
    }
    )
})



module.exports=router;