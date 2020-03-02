// 02/03/2020
// HTML Elements
var myButton = document.getElementById("myBtn"); // Button to add element into productList
// var myBodyElement = document.body;
var ProductList = [] // local db

function addProduct() {
	var inputProduct = document.getElementById("inputProduct").value; // Input value
	// console.log(inputProduct)
	ProductList.push(inputProduct) // send productname to ProductList
	ProductList.forEach((productName)=>{
		console.log(productName)
	})
}


myButton.addEventListener("click", addProduct); // click




/*function myFunction (){
	alert('test');
}*/
// document.addEventListener("DOMContentLoaded",myFunction); // Onload



// addProduct('Apple');



/*
onclick
onchange
<a href="adadsad" id="myButton" onclick="myFunction()">
var  a = document.getElementId("myButton");
a.addEventListener("click",myFunction())
*/


