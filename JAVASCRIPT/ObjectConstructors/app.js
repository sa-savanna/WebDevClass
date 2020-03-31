function Students(Name, familyName, Age, Course) { // object constructor function
    this.firstname = Name;
    this.lastname = familyName;
    this.age = Age;
    this.course = Course;
}

var anna = new Students('Anna', 'Savchenko', 25, 'Javascript');
console.log(anna);
var get = JSON.stringify(anna);
console.log(get)
var set = JSON.parse(get);
console.log(set);

anna.showInfo = function () {
    var show = `Name:${this.firstname} ${this.lastname}\nAge:${this.age}\nCourse:${this.course}`;
    console.log(show);
    
}

anna.addToStorage = function (){
    // localstorage
}

anna.removefromUI = function (){
    // remove from ui
}

anna.showInfo();


