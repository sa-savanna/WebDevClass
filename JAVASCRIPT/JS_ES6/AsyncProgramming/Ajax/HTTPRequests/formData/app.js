const inputs = document.querySelectorAll('input')
const [username,email,password,submit]= inputs;
const API = "http://localhost:3000/data";

submit.addEventListener('click',(e)=>{
    const payload = {
        user:username.value,
        email:email.value,
        pwd:password.value
    }
    let data = JSON.stringify(payload)
    // console.log('click')
    const xhr = new XMLHttpRequest();
    xhr.open('POST',API);
    xhr.setRequestHeader('Content-Type','application/json');
    xhr.send(data)
    console.log(payload)
})