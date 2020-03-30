function myFunction(){
    console.log('before es6')
}

var myNewFunction;

myNewFunction = () =>{
   console.log('js es6') 
}

myFunction(); // before
// x() // after

// x  = () => 'hello world!';


myNewFunction =  (name)=> 'Hello '+ name;

console.log(myNewFunction('Jack'));

let students = {
    name:'Anna',
    age:25,
    course:'javascript',
    showStudent:()=>{
        return `Student's name: ${this.name}\nStudent's age: ${this.age}\nStudent's course: ${this.course}`
    }
}

let records = [
    {
        name:'jack',
        age:29,
        scores:[7,2,3,4,5]
    },
    {
        name:'jack1',
        age:33,
        scores:[67,2,3,8,5]
    },
    {
        name:'jack2',
        age:44,
        scores:[1,4,54,4,5]
    }
]

// records.forEach(function(record){
//     console.log(record)
// })

records.forEach((record)=>console.log(record.scores));

const cube = x=>x*x*x; // single param
console.log(cube(4));

const greeting = (firstname,lastname)=>console.log(`Hello! ${firstname} ${lastname}`) // 2 params
greeting('Michael','Jackson');

let players  =[
    'player1',
    'player2',
    'player3',
    'player4'
]

var shuffle = (array)=>array.sort(()=> .5 - Math.random());
console.log(shuffle(players));