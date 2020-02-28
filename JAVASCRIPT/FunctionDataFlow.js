// Dataflow

var dataflow = 5;

function keeper1(b){
	return b;
}

function keeper2(b){
	return b;
}

function keeper3(b){
	return b;
}

var result = keeper3(keeper2(keeper1(dataflow)));

// console.log(result)

var students = [
{
	name:"Student1",
	score:22
},
{
	name:"Student2",
	score:65,
},
{
	name:"Student3",
	score:23,
},
{
	name:"Student4",
	score:88,
},
{
	name:"Student4",
	score:90,
},
{
	name:"Student5",
	score:37,
}
]


function showEverythinginSingleLine(myList){
	return myList.sort(function(a,b){
		return b.score - a.score
	}).filter(function (student){
		return student.score >=50
	}).map(function (value){
		return student.name;
	})
}

showEverythinginSingleLine(students) // object






/*



// Map method 
students.map(function(value,index,array){
	//console.log(value)
	//console.log(index)
	// console.log(array)
})

students.forEach(function(value){
	// console.log(value)
})


students.filter(function(){
	return student.score >=50
})

*/