var http = require('http');
const express = require('express');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server); // (antenna) listening client's messages


app.get('/',(req,res)=>{
    res.sendFile('./index.html',{root:__dirname})
})

io.on('connection',socket=>{
    console.log('a User Connected!')


    socket.on('chat message',msg=>{
        io.emit('chat message',msg);
    })

    socket.on('disconnect',()=>{
        console.log('user disconnected')
    })

})



server.listen(5004,()=>{
    console.log('port:5004')
})