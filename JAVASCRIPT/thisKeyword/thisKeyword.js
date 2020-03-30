// this keyword

function thisExample(){
    this.a='intec';
    console.log(this)
}

// thisExample(this)

function test(){
    console.log(this.name);
}

var name='intec';

var obj = {
    name:'intecbrussel',
    test:test
};

// test();
// obj.test();

function x(){
    this.a ='f00';
    console.log(a);
}

// x();

let myObj = {
    name:'intec',
    course:'javascript',
    show:function(){
        console.log(`Name: ${this.name}\nCourse: ${this.course}`)
    }
}

let Calc = {
    number1:5,
    number2:10,
    calcIt:function(){
        var result = this.number1+this.number2;
        console.log(result);
    }
}

myObj.show();

Calc.calcIt();

function y(){
    console.log(this)
}

// bind
// apply
// call
// var name = 'atilla'
// var age = 29;
// var course = 'java';
let students = {
    name:'Anna',
    age:25,
    course:'javascript',
    showStudent:function(){
        return `Student's name: ${this.name}\nStudent's age: ${this.age}\nStudent's course: ${this.course}`
    }
}

var student1 = students.showStudent();
console.log(student1);
