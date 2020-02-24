var x = "546546546546546546546"
var y = "Global Variable"


function myFunction1(){
	var y = "Local Variable"
	console.log(y)
}

function myFunction2(){
	x="Global Variable has been Updated"
	console.log(x)
}
console.log(x)
console.log(y)
myFunction1()
myFunction2()

