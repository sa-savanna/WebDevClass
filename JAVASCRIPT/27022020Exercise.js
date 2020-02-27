// Find who passed the exam and sort students by their score
// 1 get values of score key
// 2 filter scores
// 3 loop array
// 4
// Array iteration forEach
// Sort with CompareFunction sort()
// https://pastebin.com/fruPm3dX
// passScore = 70

/*

[ 'Student4 88 #GOOD', 'Student4 90 #GOOD' ]
[
  'Student4 90 #GOOD',
  'Student4 88 #GOOD',
  'Student2 65 #Fail',
  'Student5 37 #Fail',
  'Student3 23 #Fail',
  'Student1 22 #Fail'
]
*/
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
    
    function pass(student){
        return student.score >70
    }
    
    function getStudentName(student){
        var result = student.score<=70? student.name + ' ' + student.score
        + ' #Fail' : student.name
        + ' ' + student.score + ' #GOOD'
        return result ;
    }
    
    function whoPassed(myList){
        return myList.filter(pass).sort((a,b)=>{return a.score - b.score}).map(getStudentName)
    }
    
    function StudentsSortedByScore(myList){
        return myList.sort((a,b)=>{return b.score-a.score}).map(getStudentName)
    }
    
    console.log(whoPassed(students));
    console.log(StudentsSortedByScore(students))