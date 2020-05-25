// var extension = {
//     'image/jpeg' : '.jpg',
//     'image/png' : '.png',
//     'image/gif' : '.gif'
// }

const express = require('express');
const multer = require('multer')
const app = express();

const storage = multer.diskStorage({
    destination:(req,file,callback)=>{
        callback(null,`${__dirname}/uploads`)
    },
    filename:(req,file,callback)=>{
        callback(null,file.originalname)
    }
});

var upload = multer({storage:storage}).single('currentFile')

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/upload',(req,res)=>{
    upload(req,res,function(err){
        if(err){
            console.log(err)
            res.end('error')
        }else{
            res.end('file is uploaded')
        }
    })
})


app.listen(5005,()=>{
    console.log('Server is running on port 5005')
})