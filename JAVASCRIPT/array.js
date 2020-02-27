var books = ['book1','book2','book3','book4','book5'];
var currentArray = document.getElementById('myArray').innerText=books;

function myFunction(){
    var ShowInConsole = books.shift(); // removed first element
    currentArray = document.getElementById('myArray').innerText=books; // updated currentArray variable and prints new array into my same html element.
    var myResult = document.getElementById('result').innerText=ShowInConsole;
    
    return myResult;
}

