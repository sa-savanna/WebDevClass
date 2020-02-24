// Exercise with array and prompt;
var name = prompt("Enter firstname");
var familyName = prompt("Enter familyname");
var age = prompt("enter age");
var Student = {
	firstname: "",
	lastname:"",
	age:"",
	showStudent: function() {
		console.log(this.firstname+ " " + this.lastname+ " " + this.age );
	}
}

Student.firstname = name; // array property is equal to prompt (var name )
Student.lastname = familyName; // array property is equal to prompt (var familyName)
Student.age = age; // array property is equal to prompt (var age)


/*

\n

*/

var showStudent = "Firstname: "+ Student.firstname + "\nLastname: " + Student.lastname + "\nAge: " + Student.age;

//Student.showStudent(); // return function
console.log(Student) // return Object
console.log(showStudent);



