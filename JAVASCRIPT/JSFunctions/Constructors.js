function Students(name,age){ // es5
    this.name = name;
    this.age = age;
    return this.name + this.age
}

var student1 = new Students('Jack',20); // object

// Students.name='test'

// console.log(Students())

student1.age=30;
student1.name='Michael';
console.log(student1);

class Person { // es6
    constructor(name,age){
        this.name = name;
        this.age = age
    }

    print(){
        console.log(this.name + this.age)
    }

}

var p1 = new Person('Jack',21);
p1.print();
