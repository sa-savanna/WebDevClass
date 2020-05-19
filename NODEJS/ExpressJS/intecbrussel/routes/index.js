var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let data = [
    {
      id:1,
      username:'root'
    },
    {
      id:2,
      username:'admin'
    },
    {
      id:3,
      username:'user'
    }
  ]
  res.render('index', { title: 'Express', desc:'My first app',data:data });
});

router.get('/blog',function(req,res,next){
  
  res.render('blog', {title:'Welcome to my blog'})
})

router.post('/blog/add',function(req,res){
  let getFormData =  {
    title: req.body.title,
    content: req.body.content
  }
  console.log(getFormData)
})

module.exports = router;
