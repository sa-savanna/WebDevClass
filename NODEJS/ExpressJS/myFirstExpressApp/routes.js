const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('homepage')
})

let welcomeMsg = "Welcome to my Blog!"

router.get('/blog', (req, res) => {
    //res.send('blog page')
    res.render('index',{welcomeMsg:welcomeMsg})
})

let contactTitle =  "CONTACT PAGE"
router.get('/contact', (req, res) => {

    res.render('contact',"hello world")
    
})

router.post('/add', (req, res) => {
    console.log(req.body)

    /*

    */
    res.send('added.')
})



module.exports = router;


