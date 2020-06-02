const express = require('express')
const routing = require('./routing')
const passport = require('passport');
const User = require('../models/user')
const article = require('./article')
require('../passport-config')
const router = express.Router();

router.get('/',(req,res,next)=>{
  res.redirect('/home')
})


router.get('/login',(req,res,next)=>{
  const erros = req.flash().error || [];
  res.render('login')
})

router.post('/login', passport.authenticate('local', {
successRedirect: '/home/blog',
failureRedirect: '/home/login',
failureFlash: true  //Allow displaying a msg to the user 
}))

const ensureAuthenticated = (req,res,next)=>{
  if(req.isAuthenticated()){
      return next();
  }
  res.redirect('/home/login')
}

router.use('/home', routing)
router.use('/home/article',ensureAuthenticated,article)

module.exports=router;