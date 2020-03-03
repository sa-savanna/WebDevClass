// Math Object

// PI Number
console.log(Math.PI);

// Round() 
console.log(Math.round(9.6));

// Power method() returns the value of x to the power of y:
console.log(Math.pow(8,2));

// Square root of value
console.log(Math.sqrt(64));

// Absolute positive value 
console.log(Math.abs(-9.6));

// Sin / Cos
console.log(Math.sin(90 * Math.PI/180));
console.log(Math.cos(0 * Math.PI/180));

// Find Min and Max Number with Math Object
console.log("Min Number=> ", Math.min(44,66,22,1,4,8,0,9,2));
console.log("Max Number=> ", Math.max(44,66,22,1,4,8,0,9,2));

// Generate random numbers
console.log(Math.random()) // 0-1
console.log(Math.random()*10) // 0-9
console.log(Math.random()*11) // 0-10
/*

Math.E        // returns Euler's number
Math.PI       // returns PI
Math.SQRT2    // returns the square root of 2
Math.SQRT1_2  // returns the square root of 1/2
Math.LN2      // returns the natural logarithm of 2
Math.LN10     // returns the natural logarithm of 10
Math.LOG2E    // returns base 2 logarithm of E
Math.LOG10E   // returns base 10 logarithm of E
https://www.w3schools.com/js/js_math.asp
*/

function GetRandomNumber(min,max){
    return Math.random() * (max-min +1) + min;
}

console.log(GetRandomNumber(1,9));
