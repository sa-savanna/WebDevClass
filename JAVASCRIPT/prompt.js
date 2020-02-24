//var UserInput = prompt('Say Hello!');
//document.writeln(UserInput);
//console.log(UserInput);
/*console.log(confirm("OK is True, Cancel is False"))
alert("this is message");*/

var user = confirm ("Are you sure to delete those files?");
console.log(user)
console.log(typeof(user))
var result = user == true ? 'OK, DELETED':'Cancel, NOO changed ma mind';
console.log(result);

