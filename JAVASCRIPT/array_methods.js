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

console.log(books) // before pop() method
console.log(books.pop()) // pop() removed the last element
console.log(books) // after used method and prints obj out.


books.push("Ecce Homo")
books.push("Thus spoke zarathustra")
books.push(10);
books.push(true);
console.log(books)

