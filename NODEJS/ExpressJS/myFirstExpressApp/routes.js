const express = require('express');
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('homepage')
})

router.get('/blog',(req,res)=>{
    res.send('blog page')
})

router.get('/contact',(req,res)=>{
    res.send('contact page')
})

router.post('/add',(req,res)=>{
    console.log(req.body)

    /*



    */
    res.send('added.')
})



module.exports = router;