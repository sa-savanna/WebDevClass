// html elements

const username = document.querySelector('#username');
const password = document.querySelector('#password');
const loginbtn = document.querySelector('#login');

// default login for testing
// sessionStorage.user='root';
// sessionStorage.pass='123456';

loginbtn.addEventListener('click',checkAuth);

function checkAuth(event){
    if(typeof(Storage)!== 'undefined'){
        if(sessionStorage.user == username.value && sessionStorage.pass == password.value){
            // alert('username and password are correct!');
            location.href="dashboard.html"
        }else{
            // alert('username or password are incorrect.');
            // var newUser = prompt('Please Enter a Username');
            // var newPass = prompt('Please enter a pass');
            // sessionStorage.user=newUser;
            // sessionStorage.pass=newPass;
            // location.reload(); // refresh page [F5]
        }
    }
}
