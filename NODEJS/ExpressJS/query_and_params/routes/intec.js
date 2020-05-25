var express = require('express');
var router = express.Router()


router.get('/',(req,res,next)=>{
    res.send('intec page')
})

router.get('/contact',(req,res,next)=>{ // /intec/contact
    res.send('intec contact page')
})

// query

router.get('/search',(req,res)=>{
    res.setHeader('Content-Type','text/html')
    console.log(req.query)
    res.send(req.query)
})



module.exports=router