const inputs = document.querySelectorAll('input');
const [user, pass, checkbox, submit, change] = inputs;
const showInfo = document.querySelector('#showInfo');

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.users = [];
    }


    addUser() {
        console.log(`user:${this.username}\npass:${this.password}\npermission:${this.accessLevel}`)
    }

    addToUI(obj) {
        var output = `
        <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Login Form</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        Username: ${obj.username}<br>
        Password: ${obj.password}<br>
        Permission: ${obj.accessLevel}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
      </div>
    </div>
  </div>
</div>`
        showInfo.innerHTML = output;
        let users = this.getUsersFromStorage();
        users.push({
            username: obj.username,
            password: obj.password,
            accessLevel: obj.accessLevel
        })
        localStorage.setItem('users', JSON.stringify(users))
    }

    changePassword(user_name,newPassword){
        let users = this.getUsersFromStorage();
        users.forEach(function(user){
            if(user.username === user_name){
                user.password = newPassword
            }
        });
        localStorage.setItem('users',JSON.stringify(users));
    }


    getUsersFromStorage() {
        let users;
        if (localStorage.getItem('users') === null) {
            users = [];
        } else {
            users = JSON.parse(localStorage.getItem('users'))
        }
        return users;
    }

    
}


class Admin extends User {
    constructor(username, password, accessLevel) {
        super(username, password)
        this.accessLevel = accessLevel;
    }

}


/*

User.js
Admin.js
App.js

<script src="User.js"></script>
<script src="Admin.js"></script>
<script src="App.js"></script>


*/
let newUser = new Admin();
submit.addEventListener('click', (event) => {
    if (checkbox.checked == true) {
        newUser = new Admin(user.value, pass.value, 'Admin');
        newUser.addUser();
        newUser.addToUI(newUser);
    } else {
        newUser = new Admin(user.value, pass.value, 'Limited User');
        newUser.addUser();
        newUser.addToUI(newUser);
    }


    event.preventDefault();
})

change.addEventListener('click',(e)=>{
    let userAsk = prompt('Enter your username: ');
    let newPassword = prompt('Enter your new password')
    let secretAnswer = prompt('enter your secret answer')
    if(secretAnswer==='MrRobot'){
        newUser.changePassword(userAsk,newPassword)
    }else{
        alert('incorrect username/secret_answer');
    }
    e.preventDefault();
})