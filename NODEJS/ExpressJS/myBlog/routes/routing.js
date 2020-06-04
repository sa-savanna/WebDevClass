var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
const aes256 = require('aes256')
const passport = require('passport');
const User = require('../models/user')
require('../passport-config')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to my webpage', desc:'blog v1.0' });
});

router.get('/login',(req,res,next)=>{
    const erros = req.flash().error || [];
    res.render('login')
})

router.post('/login', passport.authenticate('local', {
  successRedirect: '/home/blog',
  failureRedirect: '/home/login',
  failureFlash: true  //Allow displaying a msg to the user 
}))

// //Fetching all the users
// router.get('/users', async (req, res, next) =>{
//   const users = await User.find()
//   res.status(200).json(users)
  
//   // res.render('users', { users: users })
// })

const ensureAuthenticated = (req,res,next)=>{
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/home/login')
}

// router.get('/article',(req,res)=>{ // /home/article
//   res.send('test')
// })

// BLOG
router.get('/blog', ensureAuthenticated, async function(req,res, next){
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await response.json();
  res.render('blog',{posts:posts, title:'Blog section'})
})

router.get('/blog/:id',ensureAuthenticated, async(req,res,next)=>{
 // let getPostID = req.params.id;
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.id);
  let singlePost = await response.json()
  // res.status(200).json({ response: response })
  res.render('post_detail',{singlePost:singlePost})

})


// ONLINE TOOLS PAGE
router.get('/tools',ensureAuthenticated,function(req,res,next){
  res.render('tools',{})
})


router.post('/tools/encode',(req,res)=>{
  var encrypted = aes256.encrypt(req.body.secretkey, req.body.message);
  res.send(encrypted)
})

router.post('/tools/decode',(req,res)=>{
  var decrypted = aes256.decode(req.body.secretkey, req.body.message);
  res.send(decrypted)
})

module.exports = router;
