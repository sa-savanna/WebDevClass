const jumbo = document.querySelector('.jumbotron')
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');

// click event
// jumbo.addEventListener('click',myFunction)

// keyboard events

// keypress {only chars and numbers}
// input1.addEventListener('keypress',myFunction)

// keydown { include other keypress }
input1.addEventListener('keydown',myFunction)

// keyup 
// input1.addEventListener('keyup',myFunction)

function myFunction(event){
    // console.log(event.target)
    // console.log(event.target.id)
    // console.log(event.target.className)
    // console.log(event.target.href)
   // console.log(event.key)
    input2.value+=event.key
    console.log(event.key)
    
  
  
}