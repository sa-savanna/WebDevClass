// Date Object

var BelgiumTime = new Date();
/*
console.log(BelgiumTime.getFullYear()); // 2020
console.log(BelgiumTime.getMonth()); // Month
console.log(BelgiumTime.toLocaleString('nl-BE',{timeZone: 'GMT'}));
console.log(BelgiumTime.toGMTString('nl-BE',{timeZone: 'GMT+2'}));
*/
BelgiumTime.toLocaleString('en-US');

var getHour = BelgiumTime.getHours();
var getMin = BelgiumTime.getMinutes();
var getSec = BelgiumTime.getSeconds();

var myTime = getHour + ':' + getMin + ':' + getSec;
var MyDays = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
console.log(MyDays[BelgiumTime.getDay()]);
console.log(myTime);

console.log(BelgiumTime.setFullYear(2015,01,01));
var UnixTimeStampFormat = 1422780545829;
var time = new Date(UnixTimeStampFormat * 1000);

// new Date(UnixTimeStampFormat).toLocaleString('nl-be')
// Unixtimestamp convert to String "1422780545829"
console.log(new Date(UnixTimeStampFormat).toLocaleString('nl-be'));
// https://www.epochconverter.com/

/*
var MyDays = ["Zondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrijdag","Zaterdag"];
MyDays[BelgiumTime.getDay()]
"My Time is"
'2010'/'10:12:32' 
*/

