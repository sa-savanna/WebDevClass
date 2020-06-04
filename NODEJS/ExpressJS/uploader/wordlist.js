const fs = require('fs');
const readline = require('readline');
var md5 = require('md5');


const readInterface = readline.createInterface({
    input: fs.createReadStream(process.argv[2]),
    output: process.stdout,
    console: false
});

readInterface.on('line', function(line) {
    console.log(line);
    let pwd = `${md5(line)}\n`
    fs.appendFile(process.argv[3] , pwd, function(err){
        if(err){
            console.log('append failed')
        }else{
            console.log('done!')
        }
    })
});



db.users.insert({
    username:"root",
    password:"password"
})