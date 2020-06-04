const fetch = require('node-fetch');


module.exports= async()=>{

    let response  = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await response.json();
    console.log(data);

    return data;

}