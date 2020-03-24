// local storage

let myArr =[1,2,3,4]

console.log(myArr)

console.log(localStorage)

localStorage.setItem('students','Merlin');
localStorage.setItem('numbers',myArr);
localStorage.setItem('newNumber', 1)
console.log(typeof localStorage.getItem('numbers'))
console.log(typeof localStorage.getItem('newNumber'))

// insert data as array

// converted to string as array format
var newArr = JSON.stringify(myArr);
console.log(newArr);

// insert array into local storage

localStorage.setItem('numbers',newArr);
var getArr = localStorage.getItem('numbers');

// convert string to array
console.log(JSON.parse(getArr));
console.log(typeof JSON.parse(getArr));

let students = []

students.push({
    name:'Atilla',
    age:29
});

console.log(students);

var _students = JSON.stringify(students); // converted to string

localStorage.setItem('students',_students); // inserted data into localStorage

let obj= [{
    name:'jack',
    age:29
}];

localStorage.setItem('newObj',JSON.stringify(obj));