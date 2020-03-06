// while , do while

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
console.log(students.length)
var i=0; // NaN

while(i<students.length){
	 // student.length => 2
	 console.log(students[i].name)
	 console.log(students[i].age)
	 i++; // 0,1
}

while(i<100){
	i++;
	if(i%2==0){
		// console.log(i)
	}
}



