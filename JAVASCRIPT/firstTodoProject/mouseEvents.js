// MOUSE EVENTS

const cardBody = document.querySelectorAll('.card-body')[1];
const title = document.querySelector('#tasks-title');

console.log(cardBody);
console.log(title);

// click event
title.addEventListener('click',function(event){
    console.log('This is click event => Event Type is : ', event.type);
});

// DoubleClick Event
title.addEventListener('dblclick',function(event){
    console.log('This is DoubleClick event => Event Type is : ', event.type);
});

// MouseDown Event
title.addEventListener('mousedown',function(event){
    console.log('This is MouseDown EVent and type is => ', event.type);
    title.style.color="red";
});

// MouseUp Event
title.addEventListener('mouseup',function(event){
    console.log('This is MouseUp EVent and type is => ', event.type);
    title.style.color="pink";
});

// MouseOver Event 
title.addEventListener('mouseover',function(event){
    console.log('This is mouseover EVent and type is => ', event.type);
    title.style.color="green";
});

// MouseOut Event
title.addEventListener('mouseout', function(event){
    console.log('This is mouseout event type is=> ', event.type);
    title.style.color="black";
});

