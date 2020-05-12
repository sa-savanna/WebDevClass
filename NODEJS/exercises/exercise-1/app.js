const Sum = require('./components/sum');
const Division = require('./components/division')
let number1 = process.argv[2]
let number2 = process.argv[3]

Sum(number1,number2)
Division(number1,number2)
console.log(process.argv[0])
console.log(process.argv[1])