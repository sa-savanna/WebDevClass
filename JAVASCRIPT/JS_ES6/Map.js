// MAP 
// Key-Value

/*
myMap.get(key) // get value of this key
has(key) => isKeyExist?
set(key,value) => 1-> "one"
size => count of items in myMap .length
delete(key) > delete value by key
clear() => remove all key and values
*/

let myMap = new Map(); // map
const key1='Company Name';
const value = {a:1,b:2}
const myFunction = ()=>{
    console.log('hello world')
}

// set method
myMap.set(key1,'intecbrussel');
myMap.set('obj',value);
myMap.set('myfunc',myFunction);
myMap.set('newFunc',()=>{
    console.log('foo')
})
myMap.set('obj1',{x:5,y:7}) // key - value
myMap.set('firstname','Jack');
myMap.set('age',29);



// get method
console.log(myMap.get(key1))
console.log(myMap.get('obj'));
myMap.get('myfunc');
console.log(myMap.get('firstname'))
console.log(myMap.get('age'))
// console.log(myMap)


const mynewFunction = ()=>{
    console.log('hello friends');
}
mynewFunction()
myMap.get('myfunc')();
console.log(myMap.get('obj1')) // myMap.get('myfunc');
myMap.get('newFunc')()

myMap.get(myFunction());

// has(key)
var result = myMap.has('myfunc') // true
result = myMap.has(myFunction()) // false
result = myMap.has('firstname') // true
result = myMap.has('age') // true


// size method
result = "MyMap Size is " + myMap.size



let newMap = new Map([["Player","Michael"],['score',90]]);

result = newMap.has('Player')
result = newMap.get('Player') + " " + newMap.get('score')

newMap.forEach((value,key,mapitself)=>{
    console.log(key + " " + value);
   // console.log(newMap === mapitself) // true
})

// map is not available for Map()
// newMap.map((v,k,n)=>{
//     console.log(v + " " + k)
// })


const newObjx_key = [{
    firstname:'abc'
}]
const newObjx_vale = [{
    firstname:'Pavithra',
    lastname:'Pavithra',
    age:25,
    course:'javascript'
}]

newMap.set(newObjx_key,newObjx_vale)

newMap.get(newObjx_key).forEach((v)=>{
 //   console.log(v)
})

// console.log(result) // true

for(let [key,value] of newMap.entries()){
    console.log(`${key} - ${value}`)
}


