// function symmetricDifference(setA, setB) {
//     let _difference = new Set(setA)
//     for (let elem of setB) {
//         if (_difference.has(elem)) { // 1,2,3,4 .has true or false
//             _difference.delete(elem) // 3,4 setB{3,4} == setA{3,4} 
//         } else {
//             _difference.add(elem) // setA{1,2} setB{5,6}
//         }
//     }
//     return _difference
// }


// // setA =  Set Collection [1,2,3,4]
// // setB =  Set Collection [3,4,5,6]


// const result= symmetricDifference(['atilla','anna','paul'],['atilla','anna','paul','merlin']); // result Merlin

// FOR OF
const languages = ['Python','Javascript','Java','C++'];
var companyName = 'intecbrussel'

for(var letter of companyName){ // maps, sets,DOM node collections
    console.log(letter)
}

for(var lang of languages){
    console.log(lang)
}


let myMap = new Map()
myMap.set(100,'100')
myMap.set('intec','intec')
console.log(myMap)

for(item of myMap){
    console.log(item)
}



/*

let test = document.querySelectorAll('p')
for (element of test){
    console.log("p element", element)
}

// for(let value of student){
//     console.log(value)
// }

*/


// FOR IN

const student = {
    name:'Jack',
    age:25,
    course:'Javascript'
}

// Object
for(var item in student){
    console.log(item,student[item])
}

// Array
for(let i in languages){
    console.log(i,languages[i])
}

// String
for(letter in companyName){
    console.log(companyName[letter])
}
