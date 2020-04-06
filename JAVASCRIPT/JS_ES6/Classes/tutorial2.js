const myfirstClass= class {}

const constructorFromClass = new myfirstClass();

console.log(constructorFromClass)

class Person {

    constructor(firstname,lastname,age){
        this.firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }

   print(){
       const output = `Fullname: ${this.firstname} ${this.lastname}\nAge: ${this.age}`
        console.log(output)
    }

}

let person1 = new Person('Jack','Michael',29);
// person1.firstname= 'Jack'
// person1.lastname='Michael'
// person1.age=29
person1.print();

