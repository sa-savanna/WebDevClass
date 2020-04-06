class Student { 
    constructor(name,age,scores){
        this.name = name;
        this.age = age;
        this.scores = scores;
    }

    show(){
        let output=  `Student's name ${this.name}\nAge: ${this.age}\nScores: ${this.scores.toString()}`
        console.log(output)
    }
}


let student1 = new Student('Jack',25,[66,77,88,99,100]);
student1.show();

