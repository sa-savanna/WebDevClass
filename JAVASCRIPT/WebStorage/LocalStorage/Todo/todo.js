const form = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo');

form.addEventListener('click',function(event){
    
    if(event.target.className == 'btn btn-danger'){
        console.log('ok')

        const todoValue = todoInput.value;
        let todos;

        if(localStorage.getItem('todos')===null){
            todos=[];
        }else{
            todos = JSON.parse(localStorage.getItem('todos')); // converted arr format data from local storage
        }
        todos.push(todoValue);
        
        localStorage.setItem('todos',JSON.stringify(todos));
        console.log(todos)
        

        


    }
    event.preventDefault();
})


var getArr = JSON.parse(localStorage.getItem('todos'));
/*
step1 - get array from localstorage and convert it to arr data
step2- find index number and remove and item in array
step3- convert your updated_array to string data type
step3- setItem('todos',updated_Todo)
*/



var newObj = [1,2,3,4,5,6]

console.log(newObj.toString())

// [1,2,3,4,5] to array json.parse
/*
[]
[{}]
[[{}],[{}]]

*/








var datepicker = new tui.DatePicker('#wrapper', {
    date: new Date(),
    input: {
        element: '#datepicker-input',
        format: 'yyyy-MM-dd'
    }
});