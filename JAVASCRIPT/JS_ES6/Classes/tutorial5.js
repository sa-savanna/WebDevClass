// OOP - static method

// class Test{
//     constructor(name){
//         this.name= name;
//     }

//     static myStaticFunction(){
//      console.log('myStatic',this.name)
//         console.log('myStaticMethod')
//     }
//     myMethod(){
//         console.log('myMethod',this.name)
//     }
// }

// let test = new Test('intecbrussel');
// Test.myStaticFunction();
// test.myMethod()


// class Students{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//         this.myObj=[];
//     }

//     static addUser(_name,_age){
//         this._name = _name;
//         this._age = _age;
//         let users={
//             name: _name,
//             age:_age
//         }
//         return users;
//     }

//     static example(){
//         this.greeting();
//     }

//     greeting(){
//         console.log('hello')
//     }

//     showUser(){
//         console.log(Students.addUser(this.name,this.age))
//     }
// }

// let student = new Students('Jack',29);
// // Students.addUser(student.name,student.age)
// // student.showUser()
// Students.example()

// class Calculator {

//     static calcSum(number1,number2){
//         let result =number1+number2;
//         return result;
//     }
// }

// Calculator.calcSum(6,7);

// const inputs = document.querySelectorAll('.myInput');
// const [number1,number2,button,result] = inputs;

// button.addEventListener('click',function(event){
//     console.log(typeof number1.value)
//     result.value=Calculator.calcSum(Number(number1.value),Number(number2.value));
//     event.preventDefault();
// })

// /*



// */

// class User { 
//     static myMethod (){
//         console.log(this === User)
//     }

// }

// User.myMethod();

