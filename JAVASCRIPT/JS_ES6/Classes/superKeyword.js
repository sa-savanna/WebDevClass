// Inheritance and Super

// class MainClass {
//     constructor(x, y, z) {
//         this.x = x;
//         this.y = y;
//         this.z = z;
//         this.data=[]
//     }

//     print() {
//         var out = `x:${this.x}\ny:${this.y}\nz:${this.z}\na:${this.a}\nb:${this.b}\nc:${this.c}`
//         console.log(out)
//     }

//     makeData() {
        
//         let obj = {
//             x: this.x,
//             y: this.y,
//             z: this.z,
//             a: this.a,
//             b: this.b,
//             c: this.c
//         }
//         this.data.push(obj)
//         return this.data;
//     }

//     addStorage() {

//         return localStorage.setItem('privData', JSON.stringify(this.data))
//     }

//     getDataFromStorage(){
//         return JSON.parse(localStorage.getItem('privData'));
//     }

// }

// class SubClass extends MainClass {
//     constructor(x, y, z, a, b, c) {
//         super(x, y, z);
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
// }

// const demo = new SubClass('x', 'user', 'zzzzz', 'a', 'b', 'c');
// demo.print();
// let myData = demo.makeData();
// console.log(myData)
// demo.addStorage();

// demo.getDataFromStorage().forEach((n)=>{
//     document.write(n.a)
//     console.log(n)
// })

class Employe{
    constructor(firstname,lastname,jobtitle){
        this.firstname= firstname
        this.lastname= lastname
        this.jobtitle=jobtitle
    }

    print(){
        let output = `Fullname:${this.firstname} ${this.lastname}\nJobtitle:${this.jobtitle}\nSalary:${this.salary}`
        console.log(output)
    }
}

class Programmer extends Employe{
    constructor(firstname,lastname,jobtitle,salary){
        super(firstname,lastname,jobtitle)
        this.salary = salary;
    }
    
}

class Director extends Employe{
    constructor(firstname,lastname,jobtitle,salary){
        super(firstname,lastname,jobtitle)
        this.salary = salary;
    }
    
}

let programmer = new Programmer('Nobody','Nobody','Director','$5000');
let director = new Director('Jack','Tony','Programmer','$1500');

programmer.print();
director.print();