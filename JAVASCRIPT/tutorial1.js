console.log('test')
console.log("test")

var firstname = 'Atilla'
var firstName = 'Atilla1'

console.log(firstname, firstName)

/* var, const, let */

var x;
x = 1
console.log(x)

const y= 'this is const'
// y='hello'
console.log(y)

let z;
console.log(z)

/*
let = can be updated but not re-declared.
const = cannot be updated or re-declared.
var = can be re-declared and updated.
*/

var myMessage = 'Hi, this is default value';
var howmany = 4;

if(howmany>3){
	myMessage = "myMessage variable has been updated";
}

console.log(myMessage)

// math

var firstnumber;
var secondnumber;
firstnumber = 10;
secondnumber = 20;
var total = firstnumber + secondnumber;
console.log ("TOTAL=>",total);

var a,b,c;
a=1;
b=2;
c=a+b;
console.log(c)

// https://www.techonthenet.com/js/reserved_words.php

/*
comment lines
 */

// comment line 

/*

Names can contain letters, digits, underscores, and dollar signs. Names
must begin with a letter Names can also begin with $ and _ (but we will not
use it in this tutorial) Names are case sensitive (y and Y are different
variables) Reserved words (like JavaScript keywords) cannot be used as names

*/

/*

=
*
/
+

a==b
b = 10;

mySum = 5+6


*/


var myNumber = 1;
var pi = 3.14;
var LNumber  = 1000000000;
var myString = 'This is String';
var myBoolean =  true;
var myBoolean1 = false;

/*
var a=5;
var b=6;
var app = document.getElementById('demo')
var c = a+b;
app.innerHTML=c;
*/

/*
+	Addition
-	Subtraction
*	Multiplication
**	Exponentiation (ES2016)
/	Division
%	Modulus (Division Remainder)
++	Increment
--	Decrement
*/

var myVariable = 100;
myVariable += 40; // myVariable = myVariable + 40
console.log(myVariable);

var fullname =  'Jack '
fullname += 'Sparrow'
console.log(fullname)

var asd = 6+6;
var test  = Number('3') + 1;
var test1  = "3" + 1;
console.log(test1 , " ",asd, " " ,test);

console.log("Subtraction=> ", 10-5);
console.log("Division=> ", 10/2);
console.log("Modulus=> ", 100%10);


/*
Increment — x++ or ++x
Decrement — x-- or --x
*/
let myInc = 10;
let myDec = 10;
myInc++;
++myInc;
myDec--;
--myDec;
console.log(myInc, " ", myDec);



/*

var x = 5;
x--;
var z = x;
console.log(z)
*/


// JavaScript Comparison Operators

/*

== > equal to
=== > equal value and equal type
!= > not equal
>   greater than
< less than
>= greater then or equal to
<= less than or equal to
?  > trenary operator

*/

var intec1 = 5;
var intec2= 10;
var intec3 = "5";
var intec4 = intec1;
console.log(intec1 == intec3); // true --- checking value only
console.log(intec1 === intec3); // false --- checking value and type
console.log(intec1 == intec4); // true
console.log(intec1 === intec4); // true
console.log(intec1 != intec2); // true
console.log(intec1 > intec2); // false
console.log(intec1< intec2); // true
console.log(intec1 >= intec2); // false
console.log(intec1 <= intec2); // true
console.log(intec1 >= intec3); // true

// Logical Operators
var showMe = (intec1!=intec2) && (intec1 < intec2);
showMe = (intec1 > intec2) || (intec1 == intec2);
showMe = !(intec1<intec2);
showMe = !(false);
// condition ? firstValue : secondValue;
showMe = intec1 < intec2 ? "true":"false";
showMe = "String" == "String" ? "Hello friend.":"false";
console.log(showMe);

console.log(typeof(1))
console.log(typeof("1"))
console.log(typeof(true))
console.log(typeof([1,2,3,4]))
console.log(typeof(function(){}))
console.log(typeof(NaN))
console.log(typeof(new Date()))


var userInput = 5 + "8"
var converteduserInput = Number(userInput);
console.log(converteduserInput)

if( typeof userInput === "string"){
	console.log("User enter a number as string")
	var converteduserInput = Number(userInput);
	console.log(converteduserInput)
	// do hard code here.
}else{
	console.log("Ok. This is an integer.")
}