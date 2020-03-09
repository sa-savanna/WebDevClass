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

    // console.log(myApp.classList[i]) // myApp.classList[1] ,2 ,3 
}



// myApp.innerHTML=message;

// find type of html element
    // console.log(h1.nodeName); // result: H1
    // console.log(myApp.nodeName); // result: DIV

// Finding HTML Elements
    // document.getElementById(idName);
    // document.getElementByTagName(TagName);
    // document.getElementsByClassName(ClassName);

var FindElement = document.getElementsByTagName('h1');
// console.log(FindElement); // returned a HTML collection as object

// outerHTML property 
    //FindElement[0].outerHTML="<p>hello</p>"

// Find Element by Class Name

var FindMyElementByClassName = document.getElementsByClassName('test');
// console.log(FindMyElementByClassName)

// By ClassName By TagName By ID Name

// Create Element;
var newParapgrah = document.createElement('p');
newParapgrah.textContent="Lorem Ipsum";
// myApp is DIV element
    //myApp.appendChild(newParapgrah);

// Remove Child
var myList = document.getElementById('myList');
var btn = document.getElementById('btn');

btn.addEventListener('click',removeFunction);

function removeFunction(){
    myList.removeChild(myList.firstElementChild); // remove firstchild
    myList.removeChild(myList.lastElementChild); // remove lastchild
    var test = document.querySelector('#myList li:nth-child(2)');
    test.remove();
}

