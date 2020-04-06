// Javascript EcmaScript6 - Sets

// Indexed collections are collections of data which are ordered by index value
// Keyed collections are collections which use keys these contain elemtns which are iteraable in the order of insertion

let arr = new Array(1,2,3);
let arr1 = new Array("string");


console.log(arr[1])

let set1 = new Set([1,2,3,4]);
// console.log(set1[0])

/*
.add() // add new item
.has() // isExist => true/false
.size // count of items in collection
.delete() // delete an item in collection
.clear()
*/

let newSet = new Set();

// add
newSet.add(100);
newSet.add(100);
newSet.add(100);
newSet.add(3.14);
newSet.add('intecbrussel');
newSet.add(true);
newSet.add(true);
newSet.add(NaN)
newSet.add([1,2,3]);
newSet.add({a:10,b:20})

console.log(newSet);


// size
const SizeOfCOllection = newSet.size;
console.log(SizeOfCOllection);

// delete
newSet.delete('intecbrussel');
console.log(newSet)

// has 
var result = newSet.has('intecbrussel');
result = newSet.has(100)
result = newSet.has([1,2,3])
console.log(result);


// ForEach
newSet.forEach((value)=>{
    console.log('result',value)
})



let books = new Set();
books.add('Book1')
books.add('Book2')
books.add('Book3')
books.add('Book4')

var iterator = books.values();
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())

for(value of books){
    console.log(value)
}

books.clear();

console.log(books);


