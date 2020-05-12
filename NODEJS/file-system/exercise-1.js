const fs = require('fs');


// fs.readFile(process.argv[2],'utf8',(err,content)=>{
//     console.log(content)
// })

// let getFile = 'users.json';

// fs.readFile(getFile,'utf8',(err,content)=>{
//     console.log(JSON.parse(content))
// })

// fs.appendFile(process.argv[2], process.argv[3], function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// fs.open(process.argv[2], 'w', function (err, file) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

//   fs.writeFile(process.argv[2], process.argv[3], function (err) {
//     if (err) throw err;
//     console.log('Saved!');
//   });

// fs.unlink(process.argv[2],(res)=>{
//     console.log('deleted')
// })

fs.rename(process.argv[2],process.argv[3],(x)=>{
    console.log('file has been renamed')
})