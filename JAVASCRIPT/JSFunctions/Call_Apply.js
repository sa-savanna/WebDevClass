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

