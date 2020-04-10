// OOP Polymorphism

class Person { // SuperClass, BaseClass
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    print(){
        let output = `Name:${this.name}\nAge:${this.age}`
        console.log(output)
    }

}

class Student extends Person{ // SubClass,ChildClass
    constructor(name,age,course){
        // this.name = name;
        // this.age = age
        super(name,age);
        this.course = course
    }

    print(){ // Overriding
        let output = `Name:${this.name}\nAge:${this.age}\nCourseName:${this.course}`
        console.log(output);
    }

    toString(){
        console.log('Student')
    }

}

let student = new Student('Jack',29,'Javascript');
student.print();
student.toString();