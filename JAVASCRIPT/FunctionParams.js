// Nested functions with parameters

function firstFunction() {
    var counter = 0;
    function secondFunction() {
        counter += 1;
    }
    secondFunction();
    secondFunction();
    secondFunction();
    return counter;
}

console.log(firstFunction())

function jaya(foo) {
   return foo + foo 
 }
console.log(jaya(1))
console.log(jaya("boooom"))
