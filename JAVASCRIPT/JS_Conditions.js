// Conditions Statements
/*
if
if else
if else if
switch
*/

function GetRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min;
}
console.log(GetRandomNumber(3,6));

if(GetRandomNumber(3,6)==5){
    console.log('found it!')
}else if(GetRandomNumber(3,6)==3){
    console.log('found the second number');
}else{
    console.log('nothing, try again!');
}



