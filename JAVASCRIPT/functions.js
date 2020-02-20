function myFunc(){
	console.log('this is my first function');
	// return 'this is a function'
}

//myFunc();

function doSomeCalc(a,b){
	var total = a+b;
	// return total;
	console.log(total)
}

// console.log(doSomeCalc(10,15))
doSomeCalc(10,15);


function findBiggestNumber(x,y){

	return x >= y ? 'X is greater than Y':'X is less than y';
}

console.log(findBiggestNumber(50,90));


