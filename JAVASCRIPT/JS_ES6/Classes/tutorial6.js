// getter and setter - OOP

// get getUser(){

// }

// set setUser(param){}

// let student = Student('jack')
// if(student.name){
   
// }

// student.name='michael'

class Student {
    constructor(name,age,course){
        this.name=name;
        this.age=age;
        this.course=course;
    }

    show(){
        console.log(`### STUDENT'S INFO ###\nName:${this.name}\nAge:${this.age}\nCourse:${this.course}`)
    }

    get getStudent(){
        this.show();
    }
    set setStudent(param){
        this.name = param.name;
        this.age = param.age;
        this.course = param.course;
    }

}

let student = new Student('Jack',29,'Javascript');
let student1 = new Student('Anna',25,'WEB Development');
student1.getStudent
let updateStudent = {
    name:'Michael',
    age:25,
    course:'Java'
}
student.setStudent=updateStudent;
student.getStudent;
