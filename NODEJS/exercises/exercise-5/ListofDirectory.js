// fs.readdir 
const fs = require('fs')

// fs.readdir('./',(err,files)=>{
//     console.log(files)
// })

// fs.readdir('./',(err,files)=>{
//    files.forEach(file=>{
//        console.log('Filename: '+ file)
//    }) 
// })

fs.readdir(process.argv[2],(err,files)=>{
    files.forEach(file=>{
        console.log('Filename: '+ file)
    }) 
 })