class People {

    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
        this.data = [];
    }



    showData() {
        return this.data;
    }


    addLocalStorage(){
        localStorage.setItem('data',JSON.stringify(this.data))
    }

    showLocalStorage(){
        return JSON.parse(localStorage.getItem('data'))
    }

    addUser() {
        this.data.push({
            username: this.username,
            password: this.password,
            role: this.role
        })
        console.log('user has been added.')

    }

}

let user1 = new People('root', 505050, 'admin');
let user2 = new People('jack','123321','user');
user1.addUser();

//console.log(user1.showData())

user1.showData().forEach((n) => {
    console.log(n)
})
user1.showData().map((n)=>{
    console.log('map',n.username)
})

user1.addLocalStorage();
user1.showLocalStorage();
// user1.deleteFromLocalStorage(id);

user2.addUser();
user2.addLocalStorage();
user2.showData();
user2.showLocalStorage();