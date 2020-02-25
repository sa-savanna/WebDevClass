const fetch = require('node-fetch');
const axios = require('axios');
let myData;

/*
async function getData(){
	const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')

	return response.json()
}

async function App(){
	const data = await getData();
//	console.log(data)
	
	return jsonData.push(...data);
}

App();

console.log(jsonData)

/*
console.log(JSON.stringify(jsonData))
jsonData.toString()

const url = 'https://jsonplaceholder.typicode.com/posts';

async function getData(){
	const data = await axios.get(url);
	return data;
}

console.log(getData())*/


fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => res.json())
    .then(data => {
    	let that = this;
    	myData = data
    	
      return myData = data;

} 

)

console.log(myData)