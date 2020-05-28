var express = require('express');
var router = express.Router();
const fetch = require('node-fetch')
const aes256 = require('aes256')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});


// BLOG
router.get('/blog', async function(req,res, next){
  let response = await fetch('https://jsonplaceholder.typicode.com/posts');
  let posts = await response.json();
  res.render('blog',{posts:posts})
})

router.get('/blog/:id', async(req,res,next)=>{
 // let getPostID = req.params.id;
  let response = await fetch('https://jsonplaceholder.typicode.com/posts/'+req.params.id);
  let singlePost = await response.json()
  // res.status(200).json({ response: response })
  res.render('post_detail',{singlePost:singlePost})

})


// ONLINE TOOLS PAGE
router.get('/tools',function(req,res,next){
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
