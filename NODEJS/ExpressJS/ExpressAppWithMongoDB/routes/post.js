const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

router.get('/',(req,res)=>{
    Post.find({},(err,result)=>{
        if(err){
            res.send(err)
        }else{
            res.send(result)
        }
    })
   
})

router.post('/',(req,res)=>{
    console.log(req.body)
    const post = new Post({
        title: req.body.title,
        description:req.body.description
    })
    post.save()
    .then(data=>{
        res.json(data)
    }).catch(err=>{
        console.log('error!',err)
    })
})




module.exports=router