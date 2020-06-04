// update npm 
// npm update -g npm 
const hello = require('./components/hello')
const fetch = require('node-fetch');
const data = require('./components/data')
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))

console.log(hello);
console.log(data);