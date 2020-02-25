// NumberMethods

/*

Number()
parseInt()
parseFloat()
Number.isFinite() method determines whether a value is a finite number.
Number.isInteger()
Number.isSafeInteger()  determines whether a value is a safe integer.
toFixed(2) // rounds a number

*/

var myNumber = "10";
var myFloatNumber = "sadasd 10.5";
myFloatNumber = "10.5 sadasd";
var Money = 29.99999;
var ShowInConsole;
// ShowInConsole = Number(myNumber);
// ShowInConsole = +myNumber;
ShowInConsole = parseInt(myNumber);
ShowInConsole = parseFloat(myFloatNumber)
ShowInConsole = Number.isFinite(123)
ShowInConsole = Number.isFinite(0)
ShowInConsole = Number.isFinite(-1)
ShowInConsole = Number.isFinite('123')
ShowInConsole = Number.isFinite('string')
ShowInConsole = Number.isInteger(55);
ShowInConsole = Money.toFixed(2);
console.log(typeof(ShowInConsole),">", ShowInConsole);

var user = 29.99999;
var myIntChecker = user.toFixed(2);
console.log(myIntChecker);

function fixedTheSalary(Salary){

	return "Salary > "+ Salary.toFixed(2)
}

console.log(fixedTheSalary(user))
