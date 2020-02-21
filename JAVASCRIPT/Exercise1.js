var students = [
    {
        name: "Student1",
        score: 10
    },
    {
        name: "Student2",
        score: 8
    },

    {
        name: "Student3",
        score: 5
    },
    {
        name: "Student4",
        score: 3
    }
]

function pass(student){
    return student.score >5
}

function getStudentName(student){
    return student.name;
}

function whoPassed(myList){
    return myList.filter(pass).map(getStudentName)
}

console.log(whoPassed(students));

for(i=0;i<students.length;i++){
    if(students[i].score>5){
        console.log(students[i].name)
    }
}