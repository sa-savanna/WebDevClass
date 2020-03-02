// 02/03/2020
// HTML Elements
var myButton = document.getElementById("myBtn"); // Button to add element into productList
var ProductList = []

function addProduct() {
	var inputProduct = document.getElementById("inputProduct").value; // Input value
	console.log(inputProduct)
	ProductList.push(inputProduct)
}

myButton.addEventListener("click", addProduct); // click


// addProduct('Apple');
console.log(ProductList)


/*
onclick
onchange
<a href="adadsad" id="myButton" onclick="myFunction()">
var  a = document.getElementId("myButton");
a.addEventListener("click",myFunction())
*/
