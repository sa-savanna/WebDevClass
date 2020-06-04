// Connection to web server with N0d3JS

const http = require('http');

let webServer = http.createServer();
let PORT = process.env.PORT || 3006;

let users = [
    {
        id:1,
        name:'atilla'
    }
]

webServer.on('request',(req,res)=>{
    var url = req.url;
    console.log(url)
    if(url === '/admin'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<center><h1>Welcome to Admin Panel</center></h1>')
        res.end();
    }else if(url ==='/user'){
        res.setHeader('Content-Type', 'text/html');
        res.write('<center><h1>Welcome to User Panel</center></h1>')
        res.end();
    }else if(url === '/getusers'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users))
        res.end()
    }
 res.end("It's listening from "+ PORT)
    
}).listen(PORT,()=>{
    console.log('Web server is running on '+ PORT)
})