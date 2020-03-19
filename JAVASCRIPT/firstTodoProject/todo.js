// html elements
const todoInput = document.querySelector('#todo');
const todoForm = document.querySelector('#todo-form');
const todoList = document.querySelector('.list-group');
const firstCardBody = document.querySelectorAll('.card-body')[0]
const cardHeader = document.querySelector('.card-header');
EventListeners();

function CreateElement(tagName) {
    return document.createElement(tagName);
}



function EventListeners() {
    todoInput.addEventListener('keyup',function(event){
        cardHeader.innerHTML= todoInput.value;
    })
    todoForm.addEventListener('click', addToDo)
    todoList.addEventListener('click', removeElement)

}

function spaceRemover(a){
    return a.split(' ').join('');
}

function removeElement(event) {
    if (event.target.className == 'fa fa-remove') {

        var findParentElement = event.target.parentElement.parentElement;
        console.log(findParentElement)
        findParentElement.remove()


    }
    event.preventDefault();
}

function addToDo(e) {
    if (e.target.className == 'btn btn-danger') {
        var todoValue = todoInput.value;
        var newTodo = spaceRemover(todoValue)
        if (newTodo === "" || newTodo === " " || newTodo === null) {
            displayMessage('danger', 'Please Enter a Todo!')
        } else {
            displayMessage('success', 'Todo has been added!')
            makeTodo(todoValue)
        }

        console.log('testing addToDo')
    }

    e.preventDefault()
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



function displayMessage(type, message) {

    /*

<div class="alert alert-success" role="alert">
  This is a success alert—check it out!
</div>

*/

    const div = CreateElement('div')
    div.className = `alert alert-${type}`
    div.role = "alert"
    div.innerHTML = message
    firstCardBody.appendChild(div)
    console.log(div)
    setTimeout(function () {
        div.remove();
    }, 2000)

}


// displayMessage('success','this is a test')