// UL list element
var myUL = document.getElementById('myList');
var myButton = document.getElementById('add');


myListener();

function myListener(){
    myButton.addEventListener('click',todoFunction);
}

function todoFunction(event){
    event.preventDefault();
    var input = document.createElement('input');
    var li = document.createElement('li');
    input.type='text';
    li.append(input)
    myUL.appendChild(li);
}