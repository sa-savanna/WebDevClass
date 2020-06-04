// import packages and modules
const yargs = require('yargs');
const http = require('http');
const fetch = require('node-fetch')
const fs = require('fs');

/*

--apikey
--host
--port 
--save

*/




const options = {
    apikey: {type:'string', describe:'Your API Key',demandOption: true},
    host: {type:'string', describe:'Your Hostname',demandOption: true},
    port: {type:'number', describe:'Enter a PORT number',demandOption: true},
    save: {type:'string', describe:'Enter a filename',demandOption: false},
}

let App =  yargs.usage(`
                    /|  /|  ---------------------------
                    ||__||  |                         |
                   /   O O\__    HELLO THERE! :)      |
                  /          \   welcome to apitool   |
                 /      \     \                       |
                /   _    \     \ ----------------------
               /    |\____\     \      ||
              /     | | | |\____/      ||
             /       \| | | |/ |     __||
            /  /  \   -------  |_____| ||
           /   |   |           |       --|
           |   |   |           |_____  --|
           |  |_|_|_|          |     \----
           /\                  |
          / /\        |        /
         / /  |       |       |
     ___/ /   |       |       |
    |____/    c_c_c_C/ \C_c_c_c
Usage: --apikey yourapikey --host 127.0.0.1 --port 4000 --save data.json`)
.options(options).argv;

let API_URL=`https://api.openweathermap.org/data/2.5/forecast?q=Brussel&appid=${App.apikey}`

async function weatherReport(apiURL){
    let response = await fetch(apiURL);
    let data =  await response.json();
    return data;
}

if(typeof App.save !='undefined'){
    weatherReport(API_URL).then(res=>{
        //
        let data = JSON.stringify(res);
        fs.writeFile(App.save,data,(err)=>{
            if (err) throw err;
            console.log('Saved.')
        })
    })
}

function getData(content){
    return `
    
    <div>
    ${content}
    </div>
    
    `
}


// console.log('hello world')
// console.log(App.apikey)
// console.log(App.host)
// console.log(App.port)
// console.log(App.save)



let server = http.createServer((req,res)=>{
    res.statusCode=200;
    weatherReport(API_URL).then(data=>{
        console.log(data)
        res.write(
            `
            <!doctype html>
    <html lang="en">
      <head>
        <title>My NodeJS App</title>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    
        <!-- Bootstrap CSS -->
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
      </head>
      <body>
          ${getData(JSON.stringify(data))}
        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
      </body>
    </html>
            
            `
    
        )
        res.end();
    })
    
  
}).listen(App.port,App.host,()=>{
    console.log(`Server running: http://${App.host}:${App.port}`) // Server running: http://localhost:5000
})



