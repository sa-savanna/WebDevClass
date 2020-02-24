var x = 'Firstname' + ' Lastname';
var y = "Firstname " + "Lastname";
// console.log(x);
// console.log(y);

var number1 = 1 + 1
// console.log(number1);

var ON = true;
var OFF = false;

//console.log(ON, " " , OFF);
//console.log(typeof(ON));


// Hex, Binary Octal numbers

//console.log(0xff)
// ffffff = white

var thisIsVar =  123;

thisIsVar = 321; // updated

var thisIsVar = 'STring'
//console.log(thisIsVar);


let thisIsLet  = 123;

thisIsLet = 3211;

// let thisIsLet = 'This is string now.'
//console.log(thisIsLet);

const thisIsConst= 999;
//thisIsConst = 888;
//console.log(thisIsConst);

let s1 = '1+1';
let s2 = new String('1+11');
// console.log(eval(s1));
// console.log(eval(s2));
// console.log(s1 != s2);

var bigNumber = 10;
var smallNumber = 5;
var showInConsole = bigNumber > smallNumber;
showInConsole = bigNumber <=smallNumber;
showInConsole = bigNumber >= smallNumber;

showInConsole = (bigNumber != smallNumber) &&( bigNumber <=smallNumber);
showInConsole = (bigNumber != smallNumber) || ( bigNumber <=smallNumber);

showInConsole = bigNumber != smallNumber ? 'true':'false';

if(bigNumber != smallNumber){
	console.log('true')
}else{
	console.log('false');
}
/*
console.log(showInConsole);

console.log(typeof(false))
console.log(typeof([1,2,3,4]))
console.log(typeof(function(){}))
*/
var Student = {
	studentName: "Max",
	studentAge: 29
};

//console.log(Student)

var test = 'Name' + 5;
//console.log(test)

var MyNumber = '5';

//console.log(typeof(Number(MyNumber)))

const myValue =1 +"";
//console.log(typeof(myValue))

let thisIsInt = "15";
thisIsInt = +thisIsInt; // Number(thisIsInt)
//console.log(typeof(thisIsInt))
/*
console.log(+true);
console.log(+false);
*/
let Inc = 1;
let Dec = 10;

Inc++;
Dec--;
/*
console.log(Inc) // Increment
console.log(Dec) // Decrement

*/

function myFunction(a,b){
	// hard code 
	return a+b;
}

console.log(myFunction(1,1))

var ThisIsFunction = myFunction(2,3);

console.log(ThisIsFunction);



// Local Variables

function ShowAge(){
	var yourAge = 29; // Local Variable
	return yourAge;
}

var ShowOnSite = ShowAge();

console.log("I am " + ShowOnSite + " years old.");

// Global Variables
var yourAge = 29; // Local Variable
function ShowAge(){
	
	return yourAge;
}

var ShowOnSite = ShowAge();

console.log("I am " + ShowOnSite + " years old.");
console.log("I am " + yourAge + " years old.");