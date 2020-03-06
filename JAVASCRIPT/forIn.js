// for in

var people = {
	name:'jack',
	age:29
}

var myKey;
/*for(myKey in people){
	console.log(people[myKey])
}
*/
var students = [
{
	name:'Jackie',
	age:30
},
{
	name:'jack',
	age:29
}
]

for(myKey in students){
	/*console.log(students[myKey])
	console.log(students[myKey].age)
	console.log(students[myKey].name)*/
}

console.log(myKey,"after for in loop")
// for of

for (myKey of students){
	/*console.log(myKey)
	console.log(myKey.age)
	console.log(myKey.name)*/
}

console.log(myKey,"after for of loop")