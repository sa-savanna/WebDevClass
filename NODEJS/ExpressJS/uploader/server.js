// var extension = {
//     'image/jpeg' : '.jpg',
//     'image/png' : '.png',
//     'image/gif' : '.gif'
// }

const express = require('express');
const multer = require('multer')
const app = express();
const fs = require('fs')
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const path = `./uploads`
        fs.mkdirSync(path, { recursive: true })
        return callback(null, path)
    },
    filename: (req, file, callback) => {

        // mimetypes
        var extension = {
            'image/jpeg': '.jpg',
            'image/png': '.png',
            'image/gif': '.gif'
        }




        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png' || file.mimetype === 'image/gif') {
            // file.originalname.substr(0,file.originalname.length-4)
            let output = 'image-' + Date.now() + extension[file.mimetype] // .jpg .png .gif
            // image-4384784348734
            callback(null, output)
        } else {
            console.log('This mimetype is not allowed')
        }



        // oskjdkjasdiasiodoaisdahjdihnasduasuidauisdhuiashduhauisdhuasduhuaisdhasd.jpg
        // image-timestampformate
        // image-4347878374.jpg

    }
});

var upload = multer(
    {
        storage: storage,
        limits: { fileSize: 1024000 }
    },

).single('currentFile')

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/upload', (req, res) => {

    upload(req, res, function (err) {
        if (err) {
            console.log(err)
            res.end('error')
        } else {
            res.end('file is uploaded')
        }
    })
})


app.listen(5005, () => {
    console.log('Server is running on port 5005')
})



