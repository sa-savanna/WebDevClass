// html elements
const todoInput = document.querySelector('#todo');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.list-group');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const cardHeader = document.querySelector('.card-header');
const clearButton = document.querySelector("#clear-todos");
const filter = document.querySelector('#filter');
const date = document.querySelector('#datepicker-input');


EventListeners();

// function addToArray(todo){ // todos in Array
//     if(data === null || data ===undefined){
//         data=[];
//         console.log('array initialized');
//         data.push(todo);
//     }else{
//         data.push(todo);
//     }
//     console.log(data); // console result after push item to array
// }


function CreateElement(tagName) {
    return document.createElement(tagName);
}

function EventListeners() {
    todoInput.addEventListener('keyup', function (event) {
        cardHeader.innerHTML = todoInput.value;
    });

    filter.addEventListener('keyup', filterTodos);

    clearButton.addEventListener("click", function x() {
        if (confirm("Are you sure to delete all todos?")) {
            while (todoList.firstElementChild != null) {
                todoList.removeChild(todoList.firstElementChild);
            }

        }
    });
    todoForm.addEventListener('click', addToDo);
    todoList.addEventListener('click', removeElement);

    document.addEventListener('DOMContentLoaded',loadAllTodos);

}


function loadAllTodos(){
    let todos = getTodosFromStorage();
    todos.forEach(function(todo){
        console.log(todo)
        makeTodo(todo) // todo is todo Title
    })
}

// deleteTodoFromStorage('javascript')
function deleteTodoFromStorage(deleteTodo, index) {
    let todos = getTodosFromStorage(); // return obj todos
    todos.forEach(function(todo){
        if(todo === deleteTodo){
            todos.splice(index,1);
        }
    });
    localStorage.setItem('todos',JSON.stringify(todos));
}

// object oriented programming

/*

step1 - getAllTodos as array obj
step2 - control strings if equal than use splice method remove item by index number and update array
step3 - setITem again for todos with new array obj

*/


function filterTodos(event) {
    const filterValue = event.target.value.toLowerCase();
    const listTodos = document.querySelectorAll('.list-group-item');
    listTodos.forEach(function (todo) {
        const todoTitle = todo.textContent.toLowerCase();
        console.log(todoTitle.indexOf(filterValue) === -1);
        if (todoTitle.indexOf(filterValue) === -1) {
            console.log('1=', todoTitle, '2=', filterValue)
            todo.setAttribute('style', 'background-color:white');
            // todo.setAttribute('style','display:none !important');
        } else {
            console.log('1=', todoTitle, '2=', filterValue)
            todo.setAttribute('style', 'background-color:yellow');
        }
    })
}

function spaceRemover(a) {
    return a.split(' ').join('');
}

function removeElement(event) {
    if (event.target.className == 'fa fa-remove') {

        var findParentElement = event.target.parentElement.parentElement;
        console.log(findParentElement);
        findParentElement.remove();
        deleteTodoFromStorage(event.target.parentElement.parentElement.textContent)

    }
    event.preventDefault();
}

function addToDo(e) {
    // let temp =[];
    if (e.target.className == 'btn btn-danger') {
        var todoValue = todoInput.value;
        var _date = date.value;

        var newTodo = spaceRemover(todoValue);
        if (newTodo === "" || newTodo === " " || newTodo === null) {
            displayMessage('danger', 'Please Enter a Todo!');
        } else {
            // temp.push({
            //     title:todoValue,
            //     date:_date
            // });
            displayMessage('success', 'Todo has been added!');
            // makeTodo(todoValue);
            makeTodo(newTodo); // add todo to front-end 
            addTodoToStorage(newTodo); // add todo to localstorage


        }

        console.log('testing addToDo');
    }

    e.preventDefault();
}




function getTodosFromStorage() {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    return todos;
}


function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage(); // todos array
    console.log(todos)
    todos.push(newTodo);
    localStorage.setItem('todos', JSON.stringify(todos))
}



/*
<!--  <li class="list-group-item d-flex justify-content-between">
                            Todo 1
                            <a href = "#" class ="delete-item">
                                <i class = "fa fa-remove"></i>
                            </a>
                        </li>
                       -->
*/

function makeTodo(newTodo) {
    const listItem = CreateElement('li');
    listItem.className = "list-group-item d-flex justify-content-between"
    const link = CreateElement('a');
    link.href = "#"
    link.className = "delete-item"
    link.innerHTML = "<i class = 'fa fa-remove'></i>"
    listItem.appendChild(document.createTextNode(newTodo.trim()))
    listItem.appendChild(link);

    todoList.appendChild(listItem)

    console.log(listItem);
}



// function testTodo(todos){
//     todos.forEach(function(todo,index){
//         const listItem = CreateElement('li');
//         listItem.className = "list-group-item d-flex justify-content-between"
//         const link = CreateElement('a');
//         link.href = "#"
//         link.className = "delete-item"
//         link.innerHTML = "<i class = 'fa fa-remove'></i>"
//         listItem.appendChild(document.createTextNode(todo.title + " - " + todo.date))
//         listItem.appendChild(link);

//         todoList.appendChild(listItem)
//     var output = `
//     <span>${todo.title}</span><span> - ${todo.date}</span>
//     `;
//     console.log(output);
//     });
// }

function displayMessage(type, message) {
    /*

<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>

*/
    const div = CreateElement('div');
    div.className = `alert alert-${type}`;
    div.role = "alert";
    div.innerHTML = message;
    firstCardBody.appendChild(div);
    console.log(div);
    setTimeout(function () {
        div.remove();
    }, 2000);

}

var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});