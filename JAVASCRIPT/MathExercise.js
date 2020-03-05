function printEven(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 === 0) {
      console.log(i);
    }
  }
}

function printOdd(num) {
  for (let i=1; i<num; i++) {
    if(i % 2 !== 0) {
      console.log(i);
    }
  }
}

function isEven(value){
	if(value%2===0){
		return true // correct
	}else{
		return false // incorrect
	}
}