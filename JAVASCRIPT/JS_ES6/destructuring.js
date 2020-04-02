var numbers = [1,2,3,4,5];
var newArr = [9,8,7,6,5];
// console.log(numbers[0],numbers[1]) // ECMAScript v5

const number1 = numbers[0]; // 1
const number2 = numbers[1]; // 2

const [x,y,z] = numbers;
console.log(x,y,z)

// es6
// querySelectorAll // html collection index // 4 childs
// const [username,password,email] = document.querySelectorAll('#form');


// es5
// const inputs = document.querySelectorAll('#form');
// const input1 = inputs[0];
// const input2 = inputs[1];


let students = ['Student1','Student2','Student3','Student4'];
let [a,b,c,d] = students;
console.log(a,b,c,d);

// Destructuring for Nested Arrays

let newStudents = ['Student1','Student2','Student3','Student4',[55,66,77]];
let [s1,s2,s3,s4,[n1,n2,n3]] = newStudents;
console.log(s1,s2,s3,s4,n1,n2,n3);

let StudentsInfo = {
    Name:'Mr',
    Lastname:'Nobody',
    Location:{
        Country:'Belgium',
        City:'Brussels'
    }
};

// let {Location:{Country,City}} = StudentsInfo;
// console.log(Country,City);

// let {Location:{Country,City},Name,Lastname} = StudentsInfo;
// console.log(
//     `Name: ${Name} ${Lastname}\nLocation:${City}/${Country}`
// );

const person = {
    name:'Jack',
    age:26,
    salary:5000,
    showPerson: function(){
        console.log('hello')
    }
};

const {name:Name,age:Age,salary:Salary,showPerson:printInfo} = person;
console.log(Name,Age,Salary)

printInfo();


const obj = {
    a:10,
    b:20,
    c:40,
    d:50
};

const {a:num1,b:num2,c:num3,d:num4} = obj;
console.log(num1,num2,num3,num4)


const meta = {
    title: 'INTECBRUSSEL',
    students: [
      {
        firstname: 'Jack',
        lastname: 'Michael'
      }
    ],
    course: {
      name: 'Javascript',
      module: 'ECMAScriptv6'
    }
  };