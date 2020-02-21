/*
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
*/

var result = document.getElementById('test'); // global variable
var Nietzsche = document.getElementById('nietzsche');
function getMessage(){
    // onload event
    var showTime = new Date();
    result.innerText="This is onmouseout event.";
   // alert('Welcome to my site\n' + showTime);
}

function whenMouseOvermyItem(){
    return result.innerHTML="This is onmouseover event";
}

function MyOnmouseoutEvent(){
   /* setTimeout(()=>{
        result.innerText="default"
    },3000)*/
    return result.innerHTML="This is onmouseout event.";
}

function ChangePhoto(){
    return Nietzsche.src="https://www.filosofie.nl/upload/sleutelfiguren/nietzsche.jpg";
}


function getDefault(){
    result.innerText="default"
}
