// html elements
const result = document.querySelector('.output');
const incBtn = document.querySelector('#incBtn');

incBtn.addEventListener('click',doSomething);

function doSomething() {
    console.log('hello');
    if(typeof(Storage)!=='undefined'){
        if(sessionStorage.counter){
            sessionStorage.counter = Number(sessionStorage.counter)+1
        }else{
            sessionStorage.counter =1
        }
        result.innerText=`You clicked ${sessionStorage.counter} times`;
    }else{
        console.log('sorry your browser doesnt support session storage')
    }

}

// var user = 'myUserName'
// var pass = '123321'

// sessionStorage.username=user;
// sessionStorage.password=pass;

console.log(sessionStorage.counter)