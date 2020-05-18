const express = require('express');
const app = express();
const myRouters = require('./routes');
const bodyParser = require('body-parser')
const path = require('path')
/*
app.listen(port,host,callback)

*/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
// middleware
function checkAuth(req,res,next){
    console.log('session is valid');
    next();
}
app.set('views',path.join(__dirname,'views'));
app.set('view engine','hbs');
app.use(checkAuth);

// routes
app.use('/tim',myRouters)
// // get
// app.get('/',(req,res)=>
// {
//     res.send('hello friend!')
// })

// // post

// app.post('/register',(req,res)=>{
//     res.send('user has been registered(POST method)');
    
// })

// app.get('/register',(req,res)=>{
//     res.send('hello register page(GET method)')
// })

// // all http request
// app.all('/test',(req,res)=>{
//     res.send('test method')
// });


// port
app.listen(5005,()=>{
    console.log('web server has been started')
});