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
    res.setHeader('Content-Type','application/json')
    let course = req.query.course;
    let language = req.query.language;
   // console.log(req.query)
    res.send(`Course Param Value: ${course}\nLanguage Param Value: ${language}`)
})

router.post('/useradd',(req,res)=>{
    let user = req.query.username
    let pass = req.query.password

    res.send({
        username: user,
        password: pass
    })
})

router.delete('/user',(req,res)=>{
    let userID = req.query.id

    res.send(`UserID: ${userID} has been deleted.`)
})

// params
router.get('/customer',(req,res)=>{
    res.send('Customers homepage')
})

/*


params  /// > id /user/1 
query /// > /user?id=1
body /// > {}

*/

router.get('/customer/:customer_id',(req,res)=>{
    let customerID = Number(req.params.customer_id)
    let jsonObj = [
        {
            "id":0,
            "customerName":"Mike"
        },
        {
            "id":1,
            "customerName":"Jack"
        },
        {
            "id":2,
            "customerName":"Obama"
        }
    ]

    res.send(JSON.stringify(jsonObj[customerID]))

})

router.delete('/customer/:customer_id',(req,res)=>{
    console.log(req.params)
    res.send(`Customer ID ${req.params.customer_id} deleted.`)
})

// parsing body

router.post('/addpost',(req,res)=>{
    res.send(req.body)
})

router.get('/login',(req,res)=>{
    res.render('login')
})

router.post('/login/auth',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})


module.exports=router