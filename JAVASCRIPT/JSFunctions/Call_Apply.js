// Call method

const calc = {
    d0:function(){
        return this.a + this.b;
    }
}


const firstCalc = {
    a:5,
    b:9
}

const secondCalc = {
    a:10,
    b:11
}

var result = calc.d0.call(firstCalc); // argslist
result = calc.d0.call(secondCalc); 
console.log(result);


// Apply method
const newCalc = {
    d0:function(a,b){
        return a+b;
    }
}

var res = newCalc.d0.apply('',[6,9]); // array
console.log(res);


const StudentManagement = {
    addUser:function(firstname,lastname,age,location,scores){
        var output = `Fullname: ${this.firstname} ${this.lastname}\nAge:${this.age}\nLocation:${this.location}\nScores:${this.scores}`
        console.log(output)
    }
}

var student1 = {
    firstname:'Jack',
    lastname:'Michael',
    age:29,
    location:'Brussel',
    scores:[44,77,88,99]
}

var result = StudentManagement.addUser.apply(student1);




// spread operator
// "..."

var number1=[1,2,3,4,5,6]
var number2=[7,8,9];
var resx = [...number1,...number2]
// var resx = number1.concat(number2);
console.log(resx)


let arr1= ['student1','student2'];
let arr2 = ['student3','student4'];
arr1.push(...arr2);
console.log(arr1)



const tools = {
    generate:function(){return document.createElement(this.tag)},
    getdata:function(){return JSON.parse(localStorage.getItem(this.movies))}
}

var data = {
    tag:'div',
    movies:'movies'
}

var resxx = tools.getdata.call(data);
console.log(resxx)

var data = tools.getdata('movies')
console.log(data)







