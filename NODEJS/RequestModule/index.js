const request = require('request')
const fs = require('fs')
const axios = require('axios')
const https = require('https')
// request('https://jsonplaceholder.typicode.com/posts/1',(err,response,body)=>{
//     //console.log(response);
//     console.log(body)
// })


// https://www.npmjs.com/package/request

// request('https://api.chucknorris.io/jokes/search?query=100')
// .on('response',(response)=>{
//     console.log(response.toJSON())
// })
// .pipe(fs.createWriteStream('jokes.json'));

// request('https://api.chucknorris.io/jokes/search?query=100',(err,res,body)=>{
//     fs.writeFile('jokes.json', body, function (err) {
//         if (err) throw err;
//         console.log('Saved!');
//       });
// })


// // https://www.google.com/images/errors/robot.png

// request('https://www.google.com/images/errors/robot.png')
// .pipe(fs.createWriteStream('intecbrussel.png'))


// example 1 - GET - POST Request

// axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then((response)=>{
//     console.log(response.data)
// })


// POST REQUEST WITH AXIOS
// axios.post('https://jsonplaceholder.typicode.com/posts/',{
//     title:'Test post',
//     body:'this is test body'
// })
// .then((res)=>{
//     console.log(res.statusCode)
//     console.log(res)
// })

// POST REQUEST WITH REQUEST MODULE
// request.post('https://jsonplaceholder.typicode.com/posts/',{
//     title:'Test post',
//     body:'this is test body'
// },(error,response,body)=>{
//     console.log(body)
// })

let data = {
    title: 'Test post',
    body: 'this is test body'
}

