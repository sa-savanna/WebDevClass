// JS Ecmascript5

function studentInfo(name,course){
    this.name = name;
    this.course = course;
}

studentInfo.prototype.showInfo = function(){
    console.log(`Student's name is ${this.name} and ${this.name}'s studying ${this.course}`)
}


let student1 = new studentInfo('jack','javacript');
student1.showInfo();


// JS Ecmascript6

class Student {
    constructor(name,course){ // constructor function 
        this.name = name;
        this.course = course;
    }

    show(){ // method
        return `Student's name is ${this.name} and ${this.name}'s studying ${this.course}`
    }

}

let student2 = new Student('Jack','Javascript');
console.log(student2)

console.log(student2.show())
//console.log(typeof student);