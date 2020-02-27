// Array methods
/*

toString()
join()
pop()
push() // adding new element into array

*/
var books = ['book1','book2','book3','book4','book5'];
var ShowInConsole;
ShowInConsole = books.toString();
ShowInConsole = books.join("=>") // joins all array elements into a string
/*
console.log(books) // before pop() method
console.log(books.pop()) // pop() removed the last element
console.log(books) // after used method and prints obj out.
*/

books.push("Ecce Homo")
books.push("Thus spoke zarathustra")
books.push(10);
books.push(true);
// console.log(books)

books.push("NewBook6");
// Shift Method 
ShowInConsole = books.shift();
ShowInConsole = books.unshift("NewBook1");
// console.log(ShowInConsole,"\nNewArray=> ", books);


var myNumbers =[1,2,3,4,5,6,7,8,9,10];
var secondArray = [11,12,13,14];
// console.log(myNumbers)
myNumbers.splice(6,4);
// console.log(myNumbers)


var result = myNumbers.concat(secondArray);


// console.log(result)



var myNewArray = ['Merlin','Anna','Stien','Tim','Pavithra','Paul'];

var mynewNumbers =[55,33,88,33,11,4,3,99];
myNewArray.sort(); // method sorts an array alphabetically
myNewArray.reverse(); // method reverses the elements in an array
//console.log(myNewArray)



/*

function (a,b){
	return a-b
}




*/

/*
The compare function should return a negative, zero, or positive value, depending on the arguments
*/

// Array Iteration method

// forEach 

mynewNumbers.forEach(myFunc);

function myFunc(value,index,array){
	console.log("Index=> ",index)
	console.log("Value=> ",value)
}

console.log(mynewNumbers.sort())