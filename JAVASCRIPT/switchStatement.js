// switchStatement

var number = 5;
switch(true){
	case 0:
	console.log('0');
	case 3:
	console.log('3');
	case '9':
	console.log('5 is correct');
	break;
	default:
	console.log('default')
}

var myDay = new Date();

switch(myDay.getDay()){
	case 0:
	console.log('Sunday');
	break; // stop the execution
	case 1:
	console.log('Monday');
	break; // stop the execution
	case 2:
	console.log('Tuesday');
	break; // stop the execution
	case 3:
	console.log('Today is Thursday');
	break;
	case 4:
	console.log('Friday');
	break;
	case 5:
	console.log('Saturday');
	break;
}

var Winner = "Jackie";
switch(Winner){
	case "Michael":
	console.log('Winner: Michael');
	break;
	case "Jackie":
	console.log('Winner: Jackie');
	break;
	case "Jack":
	console.log('Winner: Jack');
	break;
	default:
	console.log('default');
}





var checkBoolean = false;

var thisIsABoolean = 'true';

console.log("This IS Boolean Variable=>",typeof(Boolean(thisIsABoolean)))


switch(Boolean(checkBoolean)){
	case true:
	console.log('returned true');
	break;
	case false:
	console.log('returned false');
	break;
}

var variable1 = 9;
var variable2 = 5;
console.log(variable1<variable2? 'this is true':'this is false')

if(variable1<variable2){
	return true;
}else{
	console.log('false')
}

var myBooleanx = true;

function profile(){
	console.log('Show Profile // function callback')
}

switch (myBooleanx){
	case false:
	console.log('non')
	case true:
	profile();
	break;
}