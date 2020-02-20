// Data Type { Array }

var students =[
"Viktoriia",
"Anna",
"Merlin",
"Christophe",
"GuYing",
"Tim",
"Giselle",
"Narine",
5,
true,
false
];


/*students.forEach((item,index)=>{
	console.log(index, "value=> ", item)
})*/


let tempData=[];

tempData.push('atilla')

// console.log(tempData)

var myFriends = new Array("Student1","Student2");

// console.log(students[9])


var student = {
	name:"Jack",
	familyname:"Sparrow",
	job:"Pirate",
	country:"England"
};

var myRecords = [

{
	name:"Narine",
	familyname:"Sparrow",
	job:"Pirate",
	country:"Armenia"
},
{
	name:"Merlin",
	familyname:"Sparrow",
	job:"Pirate",
	country:"England"
},
{
	name:"Anna",
	familyname:"Sparrow",
	job:"Pirate",
	country:"Ukraine"
}

]
// console.log(student.name, student.familyname, student.job)
/*

var myarr=['a','b','c']
const check = myarr.reduce((accumulator, item)=>{
	accumulator += item,0;
})

console.log(check)*/

myRecords.forEach(element=>{
	console.log(element.country)
})