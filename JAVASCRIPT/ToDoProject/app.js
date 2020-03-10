// UL list element
var myUL = document.getElementById('myList');
var myButton = document.getElementById('add');
var tasks = document.getElementById('tasks');


myListener();

function myListener(){
    myButton.addEventListener('click',todoFunction);
}

function todoFunction(event){
    event.preventDefault();
    var input = document.createElement('input');
    var li = document.createElement('li');
    var btn = document.createElement('button');
    var addTodoButton = document.createElement('button');



    var addTodoBtnName = document.createTextNode('Add My Task to the List')
    addTodoButton.appendChild(addTodoBtnName);
    // <button>TextNode</button>

    btn.appendChild(document.createTextNode('X'));
    input.type='text';
    li.append(input)
    li.appendChild(btn);
    
    li.appendChild(addTodoButton);


    myUL.appendChild(li);
    
    // add my task in to the list
    addTodoButton.addEventListener('click', function todo(event){

        tasks.innerHTML+=`
        <li>${input.value}</li>
        `
        event.preventDefault();
       
    })

    btn.addEventListener('click', function x(event) {
        event.preventDefault();
        myUL.removeChild(li);
    })
}