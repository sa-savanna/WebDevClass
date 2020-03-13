// PROGRAMMING HERE!!



const secondBody = document.querySelectorAll("#productList")[0];
console.log(secondBody)
secondBody.addEventListener('click', testFunction);

function testFunction(event){
    if(event.target.id="delete"){
        console.log("delete")


        console.log(event.target.parentElement.parentElement.childNodes[2].nextElementSibling.outerText)
    }

    console.log(event.target.parentElement.parentElement.childNodes[2])
}




function MyCreateElementFunction(tagName){
    return document.createElement(tagName)
}

var myDiv = MyCreateElementFunction('div');
var myP = MyCreateElementFunction('p');
var tr = MyCreateElementFunction('tr');
var td = MyCreateElementFunction('td');

// console.log(myDiv)
// console.log(myP)
// console.log(tr)
// console.log(td)