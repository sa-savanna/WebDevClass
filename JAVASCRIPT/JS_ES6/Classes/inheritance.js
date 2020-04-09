// Class inheritance

// class People {
//     constructor(username,password){
//         this.username= username;
//         this.password = password;
//     }

//     showUser(){
//         console.log(`Username:${this.username}\nPassword:${this.password}`);
//     }
// }

// class Programmer extends People{

//     greeting(){
//         console.log('programmer class');
//     }
// }

// let programmer1 = new Programmer('root',123456);
// programmer1.showUser();


// class UFO{

//     constructor(name,model,type){
//         this.name = name;
//         this.model = model;
//         this.type = type;
//     }

//     print(){
//         var output = `This ufo type is ${this.type}\nDevice name is${this.name}\nModel:${this.model}`
//         console.log(output);
//     }
// }

// class CivilDrone extends UFO{

//     printService(){
//         console.log('CivilDrone')
//     }

// }

// class MilitaryDrone extends UFO{

//     printService(){
//         console.log('military drone')
//     }

// }

// let ufo1 = new CivilDrone('Tello','v1.0','Civil Drone');
// ufo1.print();
// let ufo2 = new MilitaryDrone('UAV','v1.1','Military Drone');
// ufo2.print();

class Students {
    constructor(user, role) {
        this.user = user;
        this.role = role;
        this.data = [];
    }
    showUser() {
        console.log(`Role=> ${this.role}\nUser: ${this.user}`);
    }

    showData() {
        return this.data;
    }

    addUser() {
        this.data.push({
            username: this.user,
            permission: this.role
        })
    }
}

class Programmer extends Students {
    defaultMethod() {
        console.log('programmer class')
    }
}

class Network extends Students {
    defaultMethod() {
        console.log('Networking')
    }
}

let programmer = new Programmer('Jack', 'Instructor');
let programmer1 = new Programmer('Mike', 'Student');

// programmer1
programmer1.addUser();
console.log(programmer1.showData())

// programmer
programmer.addUser();
console.log(programmer.showData())

let programmerData = programmer.showData();
programmerData.forEach((n) => {
    console.log(n.username)
})

