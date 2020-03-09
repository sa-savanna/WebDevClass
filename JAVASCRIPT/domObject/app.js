var message = "Hello DOM!";
var myApp = document.getElementById('app');

//  you should not use const and let for hoisiting.
// Variables and constants declared with let or const are not hoisted!

var h1 = document.getElementById('test');



var link = document.getElementById('link');

link.setAttribute('href','https://google.com')

h1.setAttribute('class','btn btn-success');

console.log(myApp.classList) // get All class Names
console.log(myApp.classList.length) // how many classes element uses

for(var i=0; i<myApp.classList.length; i++){

    console.log(myApp.classList[i]) // myApp.classList[1] ,2 ,3 
}
// myApp.innerHTML=message;

// find type of html element
console.log(h1.nodeName); // result: H1
console.log(myApp.nodeName); // result: DIV

// find all childNodes and iterate elements
