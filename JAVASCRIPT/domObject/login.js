const form = document.querySelector('.form-group');
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

form.addEventListener('click',myFunction);


function myFunction(event) {

    if(event.target.id=='btn'){
        var output = `Email: ${email.value}
                      Password: ${pass.value}
        
        `
        console.log(output)
    }
    
}

// email.addEventListener('keyup',keyUpFunction)

// function keyUpFunction(event){
//     console.log(event.key)
// }

email.addEventListener('keydown',keyUpFunction)

function keyUpFunction(event){
    console.log(event.key)
}